import postPreview from "../assets/images/default3.png";
import postPreview2 from "../assets/images/default2.jpg";
import cover from "../assets/images/default.jpg";
import profile from "../assets/images/person.jpg";
import NavBar from "../components/NavBar";
import PreviewComponent from "../components/PreviewComponent";
import { useState } from "react";
const Account: React.FC = () => {
  const [previewStyle, setStyle] = useState({
    display: "none",
  });
  const Preview = () => {
    if(previewStyle.display === "none"){
      setStyle({display: "flex"})
    }else{
      setStyle({display: "none"})
    }
  };
  return (
    <div className="relative">
      <NavBar />
      <section className="relative w-10/12 m-auto rounded-md flex flex-col justify-center min-h-fit ">
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
      <section className="flex w-10/12 m-auto min-h-[50vh] gridview border-2 ">
        <div className="border" onClick={() => Preview()}>
          <img src={postPreview} alt="" />
        </div>
        <div className="border">
          <img src={postPreview} alt="" />
        </div>
        <div className="border">
          <img src={postPreview} alt="" />
        </div>
        <div className="border"></div>
      </section>
      <div style={previewStyle} className="w-9/12 items-center justify-center fixed bg-white top-0 left-52  h-[20vh] p-96 shadow-md mt-20">
        <PreviewComponent img={postPreview2} close={Preview} />
      </div>
    </div>
  );
};

export default Account;
