import { useRef, useEffect, useState, SetStateAction } from "react";
import NavBar from "../components/NavBar";
import { drop } from "./../utils/utilFunctions";
import axios from "axios";
import { baseUrl } from "../utils/constants";
import { FourSquare } from "react-loading-indicators";
import swal from "sweetalert";
import SelectC from './../components/Select';
const Upload: React.FC = () => {
  const dropArea = useRef<HTMLDivElement>();
  const disabledClass =
    "text-red-200 hover:text-white bg-red-300 rounded-md p-3 m-2";
  const [inputFile, setInputFile] = useState<string | undefined>(undefined);
  const [status, setStatus] = useState("private");
  const [fileType,setFileType] = useState<string>("video");
  const [success, setSuccess] = useState(false);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);
  const handleChange = (e:any) => {
    setStatus(e);
  };
  const upload = () => {
    setLoading(true);
    axios
      .post(
        `${baseUrl}/post/upload`,
        { content: inputFile, status },
        { withCredentials: true }
      )
      .then(data => {
        console.log(data.data);
        if (data.data.status.includes("success")) {
          setResponse(data.data.message);
          setSuccess(true);
        }
        setLoading(false);
      })
      .catch(e => {
        setResponse(e.message)
        setLoading(false);
        setSuccess(false);
      });
  };
  useEffect(() => {
    drop(dropArea, setInputFile,setFileType);
  }, []);
  return (
    <div className="bg-gray-50 min-h-screen">
      <NavBar />
      {!response ? (
        <div
          className="border-2 w-6/12 mt-[10%]  m-auto p-4 min-h-[40vh] border-[#611b87] border-dashed rounded-md  h-full flex flex-col justify-between items-center"
          ref={dropArea}
        >
          {loading && <FourSquare size="small" color={"#611b87"} />}
          {!loading && (
            <form className="flex flex-col items-center">
              
                <span className="flex items-center justify-center w-full">
                  <SelectC options={["public","private"]} label={"Status"} value={status} onChange={handleChange}/>
                </span>
            
              {!inputFile && !response && (
                <span>
                  <h2>Select a video/picture to upload</h2>
                  <h4>
                    <small>or drag and drop a file</small>
                  </h4>
                  <p className="text-sm text-gray-400">
                    MP4, WebM, mpg, jpg, png or jpeg
                  </p>
                  <p className="text-sm text-gray-400">
                    720x1280 resolution or higher
                  </p>
                  <p className="text-sm text-gray-400">Up to 180 seconds</p>
                  <p className="text-sm text-gray-400">Less than 1 GB</p>
                  <input
                    type="file"
                    className="m-auto mb-6 font-semibold cursor-pointer file:cursor-pointer text-sm text-red-600 h-8 file:rounded-full file:h-5/6 file:bg-[#611b87] file:border-0 file:text-white file:font-bold"
                  />
                </span>
              )}
            </form>
          )}
          {inputFile && (
           fileType == "video" ?  <video
           src={inputFile}
           className="h-[60vh] rounded-md w-[30vw] object-cover"
           controls
           autoPlay
         ></video>: <img src={inputFile} className="h-[60vh] rounded-md w-[30vw] object-cover"></img>
          )}
          <span className="flex">
            <button
              className={inputFile ? 
                 "m-2 p-3 border bg-[#611b87] rounded-md text-white":disabledClass
              }
              onClick={upload}
              disabled={inputFile ?  false:true}
            >
              Upload
            </button>
            <button
              className={
                inputFile
                  ? "text-white bg-red-600 rounded-md p-3 m-2"
                  : disabledClass
              }
              onClick={() => setInputFile("")}
              disabled={inputFile ? false : true}
            >
              Discard
            </button>
          </span>
        </div>
      ) : (
        swal({
          title:response,
          icon: success ? "success":"error",
        }).then(ok => {
          window.location.reload();
        })
      )}
    </div>
  );
};

export default Upload;
