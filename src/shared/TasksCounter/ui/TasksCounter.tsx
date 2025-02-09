import STasksCounter from "./styles/STasksCounter.styled"

interface TasksCounterInterface {
    isActive: boolean,
    title: string
}

const TasksCounter = ({isActive, title}: TasksCounterInterface) => {
    return (
        <STasksCounter isActive={isActive}>{title}</STasksCounter>
    )
}

export default TasksCounter;