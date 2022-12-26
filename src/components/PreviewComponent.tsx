import { MdClose } from "react-icons/md";
import { Post } from "../utils/interfaces";
interface Props {
  post: Post | undefined;
  close:() => void;
}

const PreviewComponent: React.FC<Props> = ({ post, close }) => {
  return (
    <div className="absolute w-8/12 h-full flex bg-opacity-80 shadow-md shadow-black">
    {post!.type == "image" ? <img src={post!.url} alt="" className="w-11/12  object-cover"/>:<video src={post!.url} controls autoPlay className="w-11/12  object-cover"></video>}
      <span>
      </span>
      <MdClose className="absolute right-0 text-4xl w-1/12 border" onClick={() => close()}/>
    </div>
  );
};

export default PreviewComponent;
