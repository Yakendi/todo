import { UseTaskProps } from "../task/model/useTask";
import deleteTask from "./model/deleteTask";

const DeleteController = ({tasks, setTasks}: UseTaskProps) => {
    const { handleDelete } = deleteTask({tasks, setTasks})

    return { handleDelete }
}

export default DeleteController;