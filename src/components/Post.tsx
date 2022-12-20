import UserDetails from "./common/UserDetails";
import VoteButton from "./common/VoteButton";
import funny from  "../assets/videos/Feed_2.mp4"

const Post: React.FC = () => {
    return <div>
        <UserDetails name="Leo Messi" />
        <span>
            <video src={funny} width="400px" height={"400px"} controls></video>
        </span>
        <span>
            <VoteButton />
        </span>
    </div>
}

export default Post;