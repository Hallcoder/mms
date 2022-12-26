const ErrorHandler: React.FC<{message:string,status:string}> = ({message,status}) => {
    const handleErrorMessage = (message:string) => {
        if(message.includes("required pattern")){
            console.log(message);
           return "Password is not strong enough"; 
        }
        return message;
    }
    const success = "text-green-400 text-lg font-bold";
    const failed = "text-red-600 text-sm";
    return (
        <h3 className={status == "success" ? success:failed}>*{handleErrorMessage(message)}</h3>
    );
}

export default ErrorHandler;