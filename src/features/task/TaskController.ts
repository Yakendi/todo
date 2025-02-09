import useTask from "./model/useTask";

const TaskController = () => {
    const {tasks, setTasks} = useTask()

    return {tasks, setTasks}
}

export default TaskController;