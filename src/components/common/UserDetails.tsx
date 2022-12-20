import image from "../../assets/images/messi.jpg";
interface Props{
    name:string,
}

const UserDetails: React.FC<Props> = ({name}) => {
    return <div>
     <img src={image} className="w-16 h-16 rounded-full"  alt="" />
     <h2 className="text-lg text-[#611b87]">{name}</h2>
    </div>
}

export default UserDetails;