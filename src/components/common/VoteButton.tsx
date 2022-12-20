import {BiUpvote} from "react-icons/bi";
const VoteButton: React.FC  = () => {
    return <span className="text-sm text-[#611b87] rounded-full">
            {BiUpvote as unknown as React.ReactNode}
    </span>
}

export default VoteButton;