import { UseTaskProps } from "../task/model/useTask";
import checkbox from "./model/checkbox"

const CheckboxController = ({tasks, setTasks}: UseTaskProps) => {
    const {handleCompleted} = checkbox({tasks, setTasks})

    return {handleCompleted}
}

export default CheckboxController;