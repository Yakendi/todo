import STaskTabButton from "./styles/STaskTabButton.styled"

interface TodoTabInterface {
    isActive: boolean;
    title: string;
}

const TaskTabButton = ({title, isActive}: TodoTabInterface) => {
    return (
        <STaskTabButton isActive={isActive}>{title}</STaskTabButton>
    )
}

export default TaskTabButton;