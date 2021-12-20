import React, {useState, useEffect} from "react";
interface TextFieldProps {
    text: string,
    female?: string //? specifies optional prop
}
 
const TextField: React.FC<TextFieldProps> = ({text}) => {
    const [count, setCount] = useState<number>("Helo");
    useEffect(() => {
        setCount("Hi")
    }, [])
    return ( 
        <div>{text}</div>
     );
}
 
export default TextField;