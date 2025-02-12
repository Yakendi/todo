import { UseTaskProps } from "../task/model/useTask"
import edit from "./model/editTask"

const EditController = ({tasks, setTasks}: UseTaskProps) => {
    const { handleEdit, handleOnChangeEditingTask} = edit({tasks, setTasks})

    return { handleEdit, handleOnChangeEditingTask }
}

export default EditController;