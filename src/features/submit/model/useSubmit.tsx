import FormController from "../../form/FormController"
import { UseTaskProps } from "../../task/model/useTask";
import { v4 as uuidv4 } from "uuid";

const useSubmit = ({setTasks}: UseTaskProps) => {
    const { value, isDisabled, handleOnChange, handleOnSubmit } = FormController();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        
        if (!value) return;
        
        addTask(value.trim());
        handleOnSubmit(event);
    };

    const addTask = (task: string) => {
        setTasks((prevTasks) => [
            ...prevTasks,
            {
                id: uuidv4(),
                title: task,
                completed: false,
                isEditing: false
            }
        ]);
    };

    return { value, isDisabled, handleOnChange, handleSubmit };
};

export default useSubmit;