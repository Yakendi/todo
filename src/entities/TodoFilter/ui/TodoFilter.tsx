import { TasksCounter } from "../../../shared/TasksCounter";
import TodoTabButton from "../../../shared/TaskTabButton/ui/TaskTabButton";
import STodoTab from "./styles/STodoTab.styled"

interface TodoFilterInterface {
    isActive?: boolean;
    title: string;
    count: number;
    onClick: () => void;
}

const TodoFilter = ({title, count, isActive = false, onClick}: TodoFilterInterface) => {
    return (
        <STodoTab isActive={isActive} onClick={onClick}>
            <TodoTabButton isActive={isActive} title={title} />
            <TasksCounter isActive={isActive} title={`(${count})`} />
        </STodoTab>
    )
}

export default TodoFilter;