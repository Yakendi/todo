import React from "react";
import STaskInput from "./styles/STaskInput.styled"

interface TaskInputInterface {
    value: string;
    placeholder: string;
    style: React.CSSProperties;
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

const TaskInput = ({value, placeholder, style, onChange}: TaskInputInterface) => {
    return (
        <STaskInput id="input" type="text" value={value} onChange={onChange} placeholder={placeholder} style={style}/>
    )
}

export default TaskInput;