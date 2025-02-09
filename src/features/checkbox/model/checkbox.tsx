import { UseTaskProps } from "../../task/model/useTask"

const checkbox = ({tasks, setTasks}: UseTaskProps) => {

    const handleCompleted = (id: string) => {
        const updatedTasks = tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task)
        setTasks(updatedTasks);
        console.log(updatedTasks);
    }

    return { handleCompleted }
}

export default checkbox;