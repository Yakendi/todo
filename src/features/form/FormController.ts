import useForm from "./model/useForm";

const FormController = () => {
    const {value, isDisabled, handleOnChange, handleOnSubmit} = useForm()

    return {value, isDisabled, handleOnChange, handleOnSubmit}
}

export default FormController;