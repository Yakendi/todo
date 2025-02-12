import SCancelButton from "./styles/SCancelButton.styled"

const CancelButton = ({onClick}: {onClick: () => void}) => {
    return (
        <SCancelButton type="button" onClick={onClick}/>
    )
}

export default CancelButton;