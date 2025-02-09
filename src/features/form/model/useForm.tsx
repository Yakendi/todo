import { useState } from "react";

const useForm = () => {
    const [value, setValue] = useState<string>("");
    const [isDisabled, setIsDisabled] = useState<boolean>(true);

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        
        setValue("")
        setIsDisabled(true);
    };
    
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValue(newValue);
        setIsDisabled(newValue.trim() === ""); 
    };

    return { value, isDisabled, handleOnChange, handleOnSubmit };
};

export default useForm;