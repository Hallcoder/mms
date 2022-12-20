import  messi from "../../assets/images/messi.jpg";
interface Props{
    name:string;
    votes:number;
}
const TopUser: React.FC<Props> = ({name,votes}) => {
  return (
    //wanted to use  a table but a table can provide some difficulties when designing the responsiveness of the page
    <div className="flex justify-between w-full m-1 shadow-md border rounded-md p-2">
      <span className="flex">
        <img src={messi} alt="" className="h-10 w-10 rounded-full m-1" />
        <span className="flex flex-col">
        <h1>{name}</h1>
        <h3 className="text-sm text-gray-600">@{name}</h3>
        </span>
      </span>
      <span className="text-[#611b87] flex items-center">
        {votes} Votes
      </span>
    </div>
  );
};

export default TopUser;
