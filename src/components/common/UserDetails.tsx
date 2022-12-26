import image from "../../assets/images/messi.jpg";
import {HiDotsVertical} from "react-icons/hi"
interface Props{
    name:string,
    pic:string
}

const UserDetails: React.FC<Props> = ({name,pic}) => {
    return <div className="flex justify-between m-2 text-xs h-16">
     <div className="flex">
         <img src={pic} className="w-16 h-16 rounded-full"  alt="" />
         <span className="flex items-center ml-2 flex-col">
             <h2 className="text-lg text-start font-bold text-[#611b87]">{name}</h2>
         <small className="text-sm">@leomessi</small>
         </span>
     </div>
     <span>
        <HiDotsVertical className="text-lg"/>
     </span>
    </div>
}

export default UserDetails;