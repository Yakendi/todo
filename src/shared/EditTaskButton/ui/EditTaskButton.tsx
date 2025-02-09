import SEditTaskButton from "./styles/SEditTaskButton.styled";

const EditTaskButton = ({onClick}: {onClick: () => void}) => {
    return (
        <SEditTaskButton type="button" onClick={onClick}/>
    )
}

export default EditTaskButton;