import { UseTaskProps } from "../task/model/useTask";
import useFormSubmit from "./model/useSubmit"

const SubmitController = ({tasks, setTasks}: UseTaskProps) => {
    const { value, isDisabled, handleOnChange, handleSubmit} = useFormSubmit({tasks, setTasks})

    return {value, isDisabled, handleOnChange, handleSubmit}
}

export default SubmitController;