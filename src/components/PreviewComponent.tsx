import { MdClose } from "react-icons/md";
interface Props {
  img: string;
  close:() => void;
}

const PreviewComponent: React.FC<Props> = ({ img, close }) => {
  return (
    <div className="absolute w-full h-full flex">
      <img src={img} alt="" className="w-10/12  object-cover"/>
      <span>
      <h2 className="text-2xl text-center w-full border">Info</h2>
      </span>
      <MdClose className="absolute right-0 text-4xl border" onClick={() => close()}/>
    </div>
  );
};

export default PreviewComponent;
