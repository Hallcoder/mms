import UserDetails from "./common/UserDetails";
import VoteButton from "./common/VoteButton";
import funny from  "../assets/videos/Feed_2.mp4"
interface Props{

}
const Post: React.FC = () => {
    return <div className="m-2 border rounded-md text-xs">
        <UserDetails name="Leo Messi" />
        <span>
            <video src={funny} width="400px" height={"400px"} controls></video>
        </span>
        <span className="w-full flex justify-between items-center">
            <VoteButton />
            <small className="text-sm">10k Votes</small>
        </span>
    </div>
}

export default Post;