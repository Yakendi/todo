import { DeleteTaskButton } from "../../../shared/DeleteTaskButton";
import { EditTaskButton } from "../../../shared/EditTaskButton";
import STaskButtonWrapper from "./styles/STaskButtonsWrapper.styled"

interface TaskButtonsWrapperInterface {
    deleteTask: () => void;
    editTask: () => void;
}

const TaskButtonsWrapper = ({deleteTask, editTask}: TaskButtonsWrapperInterface) => {
    return (
        <STaskButtonWrapper>
            <EditTaskButton onClick={editTask}/>
            <DeleteTaskButton onClick={deleteTask}/>
        </STaskButtonWrapper>
    )
}

export default TaskButtonsWrapper;