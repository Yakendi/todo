import STodoTasksWrapper from "./styles/STodoTasksWrapper.styled"
import {TodoTask} from "../../TodoTask/index"
import deleteTask from "../../../features/delete/model/deleteTask";
import { Checkbox } from "@mui/material";

interface Task {
    id: string;
    title: string;
    completed: boolean;
    isEditing: boolean;
}

interface TodoTasksWrapperInterface {
    tasks: Task[];
    onChange: (id: string) => void;
    deleteTask: (id: string) => void;
    editTask: (id: string, value: string) => void;
}

const TodoTasksWrapper = ({ tasks, onChange, deleteTask, editTask }: TodoTasksWrapperInterface) => {

    return (
        <STodoTasksWrapper>
            {tasks.length > 0 ? (
                tasks.map((task) =>
                    task.isEditing ? (
                        <Checkbox key={task.id} />
                    ) : (
                        <TodoTask
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            checked={task.completed}
                            onChange={() => onChange(task.id)}
                            deleteTask={() => deleteTask(task.id)}
                            editTask={() => editTask(task.id, task.title)}
                        />
                    )
                )
            ) : (
                <h2>No tasks available yet</h2>
            )}
        </STodoTasksWrapper>
    );
};

export default TodoTasksWrapper;