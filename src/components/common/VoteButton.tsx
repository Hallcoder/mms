import {BiUpvote} from "react-icons/bi";
const VoteButton: React.FC  = () => {
    return <span className="text-sm text-[#611b87] rounded-full flex items-center ">
            {<BiUpvote className="text-4xl border-2 border-[#611b87] rounded-full m-2 "/> as unknown as React.ReactNode} <small className="text-xl">Vote</small>
    </span>
}

export default VoteButton;