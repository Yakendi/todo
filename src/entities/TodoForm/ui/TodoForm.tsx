import { AddTaskButton } from "../../../shared/AddTaskButton";
import { TaskInput } from "../../../shared/TaskInput";
import STodoForm from "./styles/STodoForm.styled"

interface TodoFormInterface {
    value: string;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    isDisabled: boolean;
}

const TodoForm = ({value, onSubmit, onChange, isDisabled}: TodoFormInterface) => {
    return (
        <STodoForm id="form" onSubmit={onSubmit}>
            <TaskInput value={value} placeholder="What's the task today?" onChange={onChange} style={{width: "75%"}}/>
            <AddTaskButton isDisabled={isDisabled} title="Add Task"></AddTaskButton>
        </STodoForm>
    )
}

export default TodoForm;