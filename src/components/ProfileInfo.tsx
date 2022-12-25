import cover from "../assets/images/default.jpg";
import profile from "../assets/images/person.jpg";
const ProfileInfo: React.FC = () => {
  return (
    <div className="h-full">
      <section className="relative w-full rounded-md flex flex-col justify-center min-h-fit ">
        <img src={cover} className="rounded-md" alt="cover default" />
        <img
          src={profile}
          className="rounded-full w-36 h-40 absolute top-[45%] left-[35%] "
          alt=""
        />
      </section>
      <section className="mt-24 text-center">
        <p className="text-xl">
          {" "}
          <strong>10</strong> posts
        </p>
        <p className="text-xl">
          {" "}
          <strong>2000</strong> votes
        </p>
      </section>
    </div>
  );
};

export default ProfileInfo;
