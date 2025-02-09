import { TasksCounter } from "../../../shared/TasksCounter";
import TodoTabButton from "../../../shared/TaskTabButton/ui/TaskTabButton";
import STodoTab from "./styles/STodoTab.styled"

interface TodoTabInterface {
    isActive?: boolean;
    title: string;
    count: number;
    onClick: () => void;
}

const TodoTab = ({title, count, isActive = false, onClick}: TodoTabInterface) => {
    return (
        <STodoTab isActive={isActive} onClick={onClick}>
            <TodoTabButton isActive={isActive} title={title} />
            <TasksCounter isActive={isActive} title={`(${count})`} />
        </STodoTab>
    )
}

export default TodoTab;