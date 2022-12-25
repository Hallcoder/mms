import Input from "./common/input";
import { Dispatch, SetStateAction, useState } from "react";
import OAuth from "./oAuth";
import Joi from "joi";
import { baseUrl, schema } from "../utils/constants";
import { formDataType } from "../utils/interfaces";
import axios from "axios";
import { FourSquare } from "react-loading-indicators";
import { Navigate, useNavigate } from "react-router-dom";
import ErrorHandler from "./ErrorHandler";
const Form: React.FC<{
  type: string;
  changeType: Dispatch<SetStateAction<boolean>>;
}> = ({ type, changeType }) => {
    const ableClass  ="bg-[#7a22a9] text-white font-semibold p-2 rounded-md text-xl w-2/12 m-2";
  const [formData, setFormData] = useState<any>({
    email: "hall@gmail.com",
    password: "abanabeza12345",
    username: "",
  });
  const [serverMessage, setServerMessage] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [valid, setValid] = useState<boolean>(false);
  const [errors, setErrors] = useState<any>({
    username: "",
    password: "",
    email: "",
  });
  const validateProperty = (input: HTMLInputElement) => {
    const obj = { [input.name]: input.value };
    let schem = Joi.object({ [input.name]: schema.extract(input["name"]) });
    const errors = schem.validate(obj, { abortEarly: false });
    if (errors.error) return errors.error.details[0];
    else return {};
  };
  const handleChange = (e: Event) => {
    console.log((e.currentTarget as HTMLInputElement).value);
    let input: HTMLInputElement = e.currentTarget as HTMLInputElement;
    const errors1: formDataType = { ...errors };
    const formData1: formDataType = { ...formData };
    let errorMessage = validateProperty(input);
    console.log(errorMessage)
    formData1[input.name as keyof formDataType] = input.value;
    if (Object.values(errorMessage).length > 0) {
      errors1[input.name as keyof formDataType] = (
        errorMessage as { [key: string]: string }
      ).message;
      setValid(false);
    } else {
      setValid(true);
      delete errors1[input.name as keyof formDataType];
    }
    setFormData(formData1);
    setErrors(errors1);
  };
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    setLoading(true);
    axios.post(`${baseUrl}/user/${type}`,formData,{withCredentials:true}).then(data => {
        console.log(data.data.status);
        if(data.data.status.includes("success")){
            navigate('/home');
        }
        setLoading(false);
      }).catch(err => {
        setServerMessage(err.response.data.message);
        setLoading(false);
      })
  };
  return (
    <div className="w-6/12 min-h-[60vh] border-[#611b87] rounded-md  flex flex-col items-center border m-auto mt-[16vh] text-xs">
      <h1 className="text-[#611b87] text-6xl text-center mt-10">MMS</h1>
      {serverMessage && <ErrorHandler message={serverMessage}/>}
      {type == "signup" && (
        <Input
          onChange={handleChange}
          type="text"
          value={formData["username"]}
          placeholder="username..."
          name="username"
          label="Username"
          error={errors["username"]}
        />
      )}
      <Input
        onChange={handleChange}
        type="email"
        value={formData["email"]}
        placeholder="Email..."
        name="email"
        label="Email"
        error={errors["email"]}
      />
      <Input
        onChange={handleChange}
        type="password"
        value={formData["password"]}
        placeholder="password..."
        name="password"
        label="Password"
        error={errors["password"]}
      />
      <span className="flex justify-end w-8/12 text-sm">
        {type == "login" && <p>Don't have an account? </p>}
        {type == "signup" && <p>Already have an account? </p>}
        {type == "login" && (
          <p
            className="text-[#611b87] underline"
            onClick={() => changeType(true)}
          >
            Sign up
          </p>
        )}
        {type == "signup" && (
          <p
            className="text-[#611b87] underline"
            onClick={() => changeType(false)}
          >
            Login in
          </p>
        )}
      </span>
      {loading ? <FourSquare color={"#611b87"} size={"small"} /> :
      <button
        className={valid ? ableClass:"bg-[#d398f3] text-white font-semibold p-2 rounded-md text-xl w-2/12 m-2" }
        onClick={e => handleSubmit(e)}
        disabled={!valid}
      >
     {type == "login" ? "Login":"Sign Up"}
      </button>
}
      <OAuth />
    </div>
  );
};

export default Form;
