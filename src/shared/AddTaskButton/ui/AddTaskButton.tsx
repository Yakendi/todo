import SAddTaskButton from "./styles/SAddTaskButton.styled"

interface AddTaskButtonInterface {
    title: string;
    isDisabled: boolean;
}

const AddTaskButton = ({title, isDisabled}: AddTaskButtonInterface) => {
    return (
        <SAddTaskButton type="submit" isDisabled={isDisabled}>{title}</SAddTaskButton>
    )
}

export default AddTaskButton;