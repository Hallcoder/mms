import cover from "../assets/images/default.jpg";
import profile from "../assets/images/person.jpg";
import NavBar from "../components/NavBar";
const Account: React.FC = () => {
  return (
    <div className="relative">
        <NavBar />
      <section className="relative w-10/12 m-auto rounded-md flex flex-col justify-center min-h-fit ">
        <img
          src={cover}
          className="rounded-md h-[25vh] object-fill"
          alt="cover default"
        />
        <span className="absolute top-[45%] left-[45%] flex items-center flex-col">
          <img src={profile} className="rounded-full w-36 h-40 " alt="" />
          <h1 className="font-bold text-lg">Leo Messi</h1>
        </span>
      </section>
      <section className="w-10/12 m-auto flex items-center justify-center mt-20">
        <span className="flex flex-col text-2xl items-center m-4">
          <h1 className="font-bold">10</h1>
          <h3>Posts</h3>
        </span>
        <span className="flex flex-col text-2xl items-center m-4">
          <h1 className="font-bold">10</h1>
          <h3>Posts</h3>
        </span>
        <span className="flex flex-col text-2xl items-center m-4">
          <h1 className="font-bold">10</h1>
          <h3>Posts</h3>
        </span>
      </section>
      <section className="w-10/12 m-auto min-h-[50vh] gridview border-2 ">
          <div className="border"></div>
          <div className="border"></div>
          <div className="border"></div>
          <div className="border"></div>
      </section>
    </div>
  );
};

export default Account;
