import NavBar from "../components/NavBar";
import ProfileInfo from "../components/ProfileInfo";
import TopUsers from "../components/TopUsers";
import Post from './../components/Post';

const Home : React.FC = () => {
  return <div className="w-full bg-gray-100">
  <NavBar />
  <main className="flex justify-around text-sm">
    <aside className="w-3/12 border sticky top-20 max-h-[65vh] overflow-y-scroll  shadow-md rounded-md flex justify-center">
        <TopUsers />
    </aside>
    <section className="w-5/12 border flex flex-col items-center max-h-fit overflow-y-scroll justify-center">
   <Post />
   <Post />
   <Post />
   <Post />
   <Post />
   <Post />
   <Post />
    </section>
    <aside className="w-3/12 justify-center border max-h-[38vh] min-h-fit shadow-md sticky top-20  bg-gray-100 rounded-md border-[#611b87]">
        <ProfileInfo />
    </aside>
  </main>
  </div>;
}

export default Home;
