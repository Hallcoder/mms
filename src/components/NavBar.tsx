import Input from "./common/input";
import person from "../assets/images/person.jpg";
import { useState } from "react";
const NavBar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="flex justify-between border w-full">
      <div>
        <h1 className="text-5xl text-[#611b87] m-2">MMS</h1>
      </div>
      <div className="w-5/12 flex justify-center">
      <Input
          type="text"
          value=""
          placeholder="Search..."
          label=""
          name="search"
        />
      </div>
      <div className="flex justify-center items-center">
       
        <span >
          {isLoggedIn && (
            <span className="flex items-center m-1">
                <button className="bg-[#7a22a9] text-white font-semibold p-2 rounded-md text-xl  m-2">
                  Upload
                </button>
                <img src={person} className="rounded-full h-12 w-12"></img>
            </span>
          )}
          {!isLoggedIn && (
            <button className="bg-[#7a22a9] text-white font-semibold p-2 rounded-md text-xl  m-2">
              Login
            </button>
          )}
        </span>
      </div>
    </div>
  );
};
export default NavBar;
