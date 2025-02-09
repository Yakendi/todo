import { SCheckboxWrapper, SInput, SCustomCheckbox } from "./styles/SCheckbox.styled";

export interface CheckboxInterface {
    checked: boolean;
    onChange: () => void;
  }
  
  const Checkbox = ({ checked, onChange }: CheckboxInterface) => {
    return (
      <SCheckboxWrapper>
        <SInput type="checkbox" checked={checked} onChange={onChange}/>
        <SCustomCheckbox checked={checked} />
      </SCheckboxWrapper>
    );
  };

export default Checkbox;