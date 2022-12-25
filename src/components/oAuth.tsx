import google from "../assets/images/google.png";
import facebook from "../assets/images/facebook.png";
const OAuth: React.FC = () => {
    const oAuthButtonStyle = "h-12 w-12 m-2 ";
    return <div className="flex flex-col justify-around w-8/12 text-xs items-center mt-4">
    <h1>Sign Up/Login with</h1>
    <span>
      <button className={oAuthButtonStyle}>
        <img src={google} alt="login with google" />
      </button>
      <button className={oAuthButtonStyle}>
        <img src={facebook} alt="login with google" />
      </button>
    </span>
  </div>
}

export default OAuth;