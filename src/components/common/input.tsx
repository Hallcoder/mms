interface Props{
    name:string,
    label:string,
    placeholder:string,
    value:string,
    type:string,
}
const Input: React.FC<Props> = ({name, label, placeholder,type,value }) => {
    return ( 
        <div className="w-8/12 rounded-md text-sm flex flex-col justify-start m-2 p-1">
            <label htmlFor={name} className="text-lg w-2/12 font-bold text-gray-600">{label}</label>
            <input type={type} value={value} placeholder={placeholder} className="min-h-16 border-2 border-[#611b87] text-gray-600 rounded-md p-2 text-lg  outline-[#611b87]"/>
        </div>
     );
}

export default Input;