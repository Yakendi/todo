import React from "react";
import { CancelButton } from "../../../shared/CancelButton";
import { SaveButton } from "../../../shared/SaveButton";
import { TaskInput } from "../../../shared/TaskInput";
import SEditTaskForm from "./styles/SEditTaskForm.styled"

interface EditTaskFormInterface {
    value: string;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    handleCancel: () => void;
}

const EditTaskForm = ({value, onSubmit, onChange, handleCancel}: EditTaskFormInterface) => {
    return (
        <SEditTaskForm onSubmit={(e) => { e.preventDefault(); onSubmit(e); }}>
            <TaskInput value={value} placeholder={value} onChange={onChange} style={{width: "100%"}}/>
            <SaveButton />
            <CancelButton onClick={handleCancel}/>
        </SEditTaskForm>
    )
}

export default EditTaskForm;