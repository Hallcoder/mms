import ErrorHandler from './../ErrorHandler';
interface Props{
    name:string,
    label:string,
    placeholder:string,
    value:string | undefined,
    type:string,
    error?:string,
    onChange:(e:any) => void;
}
const Input: React.FC<Props> = ({name, label, placeholder,type,value,error,onChange }) => {
    return ( 
        <div className="w-8/12 rounded-md text-xs flex flex-col justify-start m-2 p-1">
            <span className='flex w-full flex-col'>
                <label htmlFor={name} className="text-lg w-2/12 font-bold text-gray-600">{label}</label>
                <input type={type} value={value!} name={name} onChange={onChange} placeholder={placeholder} className="min-h-16 border-2 border-[#611b87] text-gray-600 rounded-md p-2 text-lg  outline-[#611b87]"/>
            </span>
           {error && <span>
                <ErrorHandler message={error} status={"failed"}/>
            </span>}
        </div>
     );
}

export default Input;