import Dropdown from "../component/dropdown";
import { useState } from "react";


const options = [
  {label:"Red apple",value:"red"},
  { label: "Blue ball", value: "blue" },
  {label:"Black board",value:"black"},
]
function DropdownPage() {
  const [isOptionSelected, setOptionSelected] = useState(null)
  const optionSelectionHandler = (selectedOption) => {
    setOptionSelected(selectedOption)
   }

  return (<Dropdown options={options} onChange={optionSelectionHandler} value={isOptionSelected} />)
}

export default DropdownPage;
