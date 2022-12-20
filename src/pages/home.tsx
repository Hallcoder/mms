import NavBar from "../components/NavBar";
import ProfileInfo from "../components/ProfileInfo";
import TopUsers from "../components/TopUsers";
import Post from './../components/Post';

const Home : React.FC = () => {
  return <div className="w-full">
  <NavBar />
  <main className="flex justify-around">
    <aside className="w-3/12 border flex justify-center">
        <TopUsers />
    </aside>
    <section className="w-6/12 border flex justify-center">
   <Post />
    </section>
    <aside className="w-3/12 justify-center border min-h-[40vh] rounded-md border-[#611b87]">
        <ProfileInfo />
    </aside>
  </main>
  </div>;
}

export default Home;
