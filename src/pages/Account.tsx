import { useEffect } from "react";
import postPreview from "../assets/images/default3.png";
import postPreview2 from "../assets/images/default2.jpg";
import cover from "../assets/images/default.jpg";
import profile from "../assets/images/person.jpg";
import NavBar from "../components/NavBar";
import PreviewComponent from "../components/PreviewComponent";
import { useState } from "react";
import { baseUrl } from "../utils/constants";
import axios from "axios";
import {Post} from  "../utils/interfaces"
const Account: React.FC = () => {
  const [previewStyle, setStyle] = useState({
    display: "none",
  });
  const [posts, setPosts] = useState<any[]>([]);
  const [previewPost, setPreviewPost] = useState<Post | undefined>({
    url: "",
    type: "",
  });
  const Preview = (post?: Post) => {
    if (previewStyle.display === "none") {
      setPreviewPost(post);
      setStyle({ display: "flex" });
    } else {
  Array.from(document.getElementsByTagName("video")).map(v => v.pause());
      setStyle({ display: "none" });
    }
  };
  useEffect(() => {
    axios.get(`${baseUrl}/post/me`, { withCredentials: true }).then(data => {
      setPosts(data.data.data);
    });
  }, []);
  return (
    <div className="relative">
      <NavBar />
      <section className="relative w-6/12 m-auto mt-10 rounded-md flex flex-col justify-center min-h-fit ">
        <img
          src={cover}
          className="rounded-md h-[25vh] object-fill"
          alt="cover default"
        />
        <span className="absolute top-[45%] left-[45%] flex items-center flex-col">
          <img src={profile} className="rounded-full w-36 h-40 " alt="" />
          <h1 className="font-bold text-lg">Leo Messi</h1>
        </span>
      </section>
      <section className="w-10/12 m-auto flex items-center justify-center mt-20">
        <span className="flex flex-col text-2xl items-center m-4">
          <h1 className="font-bold">10</h1>
          <h3>Posts</h3>
        </span>
        <span className="flex flex-col text-2xl items-center m-4">
          <h1 className="font-bold">10</h1>
          <h3>Posts</h3>
        </span>
        <span className="flex flex-col text-2xl items-center m-4">
          <h1 className="font-bold">10</h1>
          <h3>Posts</h3>
        </span>
      </section>
      <section className="flex w-6/12 m-auto min-h-[50vh] gridview border-2 ">
        {posts.length > 0 &&
          posts.map(p => {
            return (
              <div
                className="border"
                onClick={() => Preview({url:p.content.secure_url,type:p.content.resource_type})}
              >
                {p.content.resource_type == "image" ? (
                  <img src={p.content.secure_url} alt="" className="h-full object-cover"/>
                ) : (
                  <video src={p.content.secure_url} poster={""}  className="h-full object-cover"></video>
                )}
              </div>
            );
          })}
        {/* <div className="border">
          <img src={postPreview} alt="" />
        </div>
        <div className="border">
          <img src={postPreview} alt="" />
        </div>
        <div className="border"></div> */}
      </section>
      <div
        style={previewStyle}
        className="w-9/12 items-center justify-center fixed bg-white top-0 left-52 mb-40 h-[20vh] p-96 shadow-md mt-20"
      >
        <PreviewComponent post={previewPost} close={Preview} />
      </div>
    </div>
  );
};

export default Account;
