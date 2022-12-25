import Input from "./common/input";
import google from "../assets/images/google.png";
import facebook from "../assets/images/facebook.png";
import { useState } from "react";
import Form from "./form";
const Login: React.FC = () => {
  const oAuthButtonStyle = "h-12 w-12 m-2";
  const [createAccount, setCreateAccount] = useState(false);
  //extract the form and body to create a more efficient app (use ternary operator to render depending on the value of the createAccount)
  //       <div className="w-6/12 min-h-[60vh] border-[#611b87] rounded-md  flex flex-col items-center border m-auto mt-[16vh]">
  //       <h1 className="text-[#611b87] text-6xl text-center mt-10">MMS</h1>
  //       <Input
  //         type="text"
  //         value={""}
  //         placeholder="username..."
  //         name="username"
  //         label="Username"
  //       />
  //       <Input
  //         type="Email"
  //         value={""}
  //         placeholder="Email..."
  //         name="Email"
  //         label="Email"
  //       />
  //       <Input
  //         type="text"
  //         value={""}
  //         placeholder="password..."
  //         name="password"
  //         label="Password"
  //       />
  //       <span className="flex justify-end w-8/12 text-sm">
  //         <p>Already have an account? </p>
  //         <p
  //           className="text-[#611b87] underline"
  //           onClick={() => setCreateAccount(false)}
  //         >
  //           Log in
  //         </p>
  //       </span>
  //       <button className="bg-[#7a22a9] text-white font-semibold p-2 rounded-md text-xl w-2/12 m-2">
  //         Sign Up
  //       </button>
  //       <div className="flex flex-col justify-around w-8/12">
  //         <h1>Sign up with</h1>
  //         <span>
  //           <button className={oAuthButtonStyle}>
  //             <img src={google} alt="login with google" />
  //           </button>
  //           <button className={oAuthButtonStyle}>
  //             <img src={facebook} alt="login with google" />
  //           </button>
  //         </span>
  //       </div>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className="w-6/12 min-h-[60vh] border-[#611b87] rounded-md  flex flex-col items-center border m-auto mt-[16vh]">
  //       <h1 className="text-[#611b87] text-6xl text-center mt-10">MMS</h1>
  //       <Input
  //         type="email"
  //         value={""}
  //         placeholder="Email..."
  //         name="email"
  //         label="Email"
  //       />
  //       <Input
  //         type="password"
  //         value={""}
  //         placeholder="password..."
  //         name="password"
  //         label="Password"
  //       />
  //       <span className="flex justify-end w-8/12 text-sm">
  //         <p>Don't have an account? </p>
  //         <p
  //           className="text-[#611b87] underline"
  //           onClick={() => setCreateAccount(true)}
  //         >
  //           Sign up
  //         </p>
  //       </span>
  //       <button className="bg-[#7a22a9] text-white font-semibold p-2 rounded-md text-xl w-2/12 m-2">
  //         Login
  //       </button>
  //       <div className="flex flex-col justify-around w-8/12">
  //         <h1>Login with</h1>
  //         <span>
  //           <button className={oAuthButtonStyle}>
  //             <img src={google} alt="login with google" />
  //           </button>
  //           <button className={oAuthButtonStyle}>
  //             <img src={facebook} alt="login with google" />
  //           </button>
  //         </span>
  //       </div>
  //     </div>
  if(createAccount){
    return <Form type="signup" changeType={setCreateAccount}/>
  }else{
    return <Form type="login" changeType={setCreateAccount}/>
  }
};

export default Login;
