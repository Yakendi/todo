import { UseTaskProps } from "../../task/model/useTask";

const deleteTask = ({tasks, setTasks}: UseTaskProps) => {
    
    const handleDelete = (id: string) => {
        const remainingTasks = tasks.filter((task) => id !== task.id);
        setTasks(remainingTasks);
    }

    return { handleDelete };
}

export default deleteTask;