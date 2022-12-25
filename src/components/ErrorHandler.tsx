const ErrorHandler: React.FC<{message:string}> = ({message}) => {
    const handleErrorMessage = (message:string) => {
        if(message.includes("required pattern")){
            console.log(message);
            
           return "Password is not strong enough"; 
        }
        return message;
    }
    return (
        <h3 className="text-red-600 text-sm">*{handleErrorMessage(message)}</h3>
    );
}

export default ErrorHandler;