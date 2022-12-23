import image from "../../assets/images/messi.jpg";
interface Props{
    name:string,
}

const UserDetails: React.FC<Props> = ({name}) => {
    return <div className="flex m-2">
     <img src={image} className="w-16 h-16 rounded-full"  alt="" />
     <span className="flex items-center ml-2 flex-col">
    <h2 className="text-lg text-start font-bold text-[#611b87]">{name}</h2>
     <small className="text-lg">@leomessi</small>
     </span>
    </div>
}

export default UserDetails;