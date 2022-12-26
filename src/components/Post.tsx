import UserDetails from "./common/UserDetails";
import VoteButton from "./common/VoteButton";
import funny from  "../assets/videos/Feed_2.mp4"
interface Props{
content:string,
email:string,
username:string,
pic:string,
type:string
}
const Post: React.FC<Props> = ({content,email,username,pic,type}) => {
    return <div className="m-2 border rounded-md text-xs">
        <UserDetails name={username} pic={pic}/>
        <span>
        {type == "image" ? <img src={content} width="400px" height={"400px"}></img>:<video src={content} width="400px" height={"400px"} controls></video>}
        </span>
        <span className="w-full flex justify-between items-center">
            <VoteButton />
            <small className="text-sm">10k Votes</small>
        </span>
    </div>
}

export default Post;