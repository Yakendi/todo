import STodoTasksWrapper from "./styles/STodoTasksWrapper.styled";
import { TodoTask } from "../../TodoTask/index";
import { EditTaskForm } from "../../EditTaskForm";

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
    editTask: (id: string) => void;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    onChangeEditingTask: React.ChangeEventHandler<HTMLInputElement>;
    handleCancel: () => void;
    value: string;
}

const TodoTasksWrapper = ({ tasks, onChange, deleteTask, editTask, onSubmit, onChangeEditingTask, handleCancel, value }: TodoTasksWrapperInterface) => {
    return (
        <STodoTasksWrapper>
            {tasks.length > 0 ? (
                tasks.map((task) =>
                    task.isEditing ? (
                        <EditTaskForm 
                            key={task.id} 
                            value={value} 
                            onSubmit={onSubmit} // Теперь передаем `e`
                            onChange={onChangeEditingTask} 
                            handleCancel={handleCancel} 
                        />
                    ) : (
                        <TodoTask
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            checked={task.completed}
                            onChange={() => onChange(task.id)}
                            deleteTask={() => deleteTask(task.id)}
                            editTask={() => editTask(task.id)}
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
