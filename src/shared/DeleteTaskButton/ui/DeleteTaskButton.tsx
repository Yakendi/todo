import SDeleteTaskButton from "./styles/SDeleteTaskButton.styled"

const DeleteTaskButton = ({onClick}: {onClick: () => void}) => {
    return (
        <SDeleteTaskButton onClick={onClick} />
    )
}

export default DeleteTaskButton;