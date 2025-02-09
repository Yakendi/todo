import { UseTaskProps } from "../task/model/useTask"
import edit from "./model/editTask"

const EditController = ({tasks, setTasks}: UseTaskProps) => {
    const { handleEdit } = edit({tasks, setTasks})

    return { handleEdit }
}

export default EditController;