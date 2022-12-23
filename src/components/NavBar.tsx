import Input from "./common/input";
import person from "../assets/images/person.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const NavBar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="flex justify-between border w-full sticky top-0 z-[1] bg-gray-50">
      <div>
        <h1 className="text-5xl text-[#611b87] m-2" onClick={() => navigate('/home')}>MMS</h1>
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
                <button className="bg-[#7a22a9] text-white font-semibold p-2 rounded-md text-xl  m-2" onClick={() => navigate('/upload')}>
                  Upload
                </button>
               <span className="relative">
               <img src={person} className="rounded-full h-12 w-12 peer"></img>
               <div className="peer-hover:flex hidden hover:flex absolute right-2 border text-lg w-[20vh]">
                <ul className="list-none w-full bg-white shadow-md">
                  <li className="border-b p-2 hover:bg-gray-100 cursor-pointer" onClick={() => navigate('/account/test-user')}>View Profile </li>
                  <li className="border-b p-2 hover:bg-gray-100 cursor-pointer">Settings</li>
                </ul>
               </div>
               </span>
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
