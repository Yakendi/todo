import { UseTaskProps } from "../../task/model/useTask";

const  edit = ({tasks, setTasks}: UseTaskProps) => {

    const handleEdit = (id: string, value: string) => {
        const editingTask = tasks.map((task) => id === task.id ? { ... task, isEditing: !task.isEditing, title: value} : task);
        setTasks(editingTask);
    }

    return { handleEdit }
}

export default edit;