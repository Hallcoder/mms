import TopUser from "./common/TopUser";

const TopUsers: React.FC = () => {
    return <div className="w-10/12">
        <h1 className="text-[#611b87] text-xl text-center">Top Users</h1>
        <TopUser name="Leo Messi" votes={12000000} />
        <TopUser name="Leo Messi" votes={12000000} />
        <TopUser name="Leo Messi" votes={12000000} />
        <TopUser name="Leo Messi" votes={12000000} />
        <TopUser name="Leo Messi" votes={12000000} />
        <TopUser name="Leo Messi" votes={12000000} />
        <TopUser name="Leo Messi" votes={12000000} />
        <TopUser name="Leo Messi" votes={12000000} />
    </div>
}

export default TopUsers;