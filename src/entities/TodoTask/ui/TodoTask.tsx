import { TaskButtonsWrapper } from "../../TaskButtonsWrapper";
import { STodoTask, SFiller } from "./styles/STodoTask.styled";
import { Checkbox } from "../../../shared/Checkbox";

interface TodoTaskInterface {
    id: string;
    title: string;
    checked: boolean;
    onChange: () => void;
    deleteTask: () => void;
    editTask: () => void;
}

const TodoTask = ({id, title, checked, onChange, deleteTask, editTask}: TodoTaskInterface) => {
    return (
        <STodoTask key={id} id={id}>
            <Checkbox checked={checked} onChange={onChange} />
            {title}
            <SFiller />
            <TaskButtonsWrapper deleteTask={deleteTask} editTask={editTask}/>
        </STodoTask>
    )
}

export default TodoTask;