import React from "react";
import STaskInput from "./styles/STaskInput.styled"

interface TaskInputInterface {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

const TaskInput = ({value, onChange}: TaskInputInterface) => {
    return (
        <STaskInput id="input" type="text" value={value} onChange={onChange} placeholder="What is the task today?"/>
    )
}

export default TaskInput;