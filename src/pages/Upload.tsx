import NavBar from "../components/NavBar";
import Input from "../components/common/input";
import { allowDrop, drop } from './../utils/utilFunctions';

const Upload : React.FC = () => {
    return <div className="bg-gray-50 min-h-screen">
     <NavBar />
     <div className="border-2 w-6/12 mt-[10%]  m-auto p-4 min-h-[40vh] border-[#611b87] border-dashed rounded-md  h-full flex flex-col justify-between items-center" onDrop={(e) => drop(e)} onDragOver={(e) => allowDrop(e)}>

    <span className="flex">
        <Input type="radio" value='' name='status' label="Private" placeholder=""/>
        <Input type="radio" value='' name='status' label="Public" placeholder=""/>
    </span>
          <h2>Select a video/picture to upload</h2>
          <h4>
            <small>or drag and drop a file</small>
          </h4>
          <p className="text-sm text-gray-400">MP4, WebM, mpg, jpg, png or jpeg</p>
          <p className="text-sm text-gray-400">720x1280 resolution or higher</p>
          <p className="text-sm text-gray-400">Up to 180 seconds</p>
          <p className="text-sm text-gray-400">Less than 1 GB</p>
          <input
            type="file"
            className="m-auto mb-6 font-semibold cursor-pointer file:cursor-pointer text-sm text-red-600 h-8 file:rounded-full file:h-5/6 file:bg-[#611b87] file:border-0 file:text-white file:font-bold"
          />
        <span className="flex">
            <button className="m-2 p-3 border bg-[#611b87] rounded-md text-white">Upload</button>
            <button className="text-red-600 hover:text-white hover:bg-red-600 rounded-md p-3 m-2">Discard</button>
        </span>
        </div>
    </div>
}

export default Upload;