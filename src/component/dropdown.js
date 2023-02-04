import { useState } from "react"
import Panel from "./Panel"

function Dropdown({ options, value, onChange }) {
    const [isDropdownOpen, setDropdownOpen] = useState(false)

    const optionSelectHandler = (label) => {
        onChange(label)
        setDropdownOpen(!isDropdownOpen)
    }
    const renderedOptions = options.map(option => {
        return (<div key={option.value}>
            <div className="hover:bg-sky-100 border rounded p-2 my-1.5 shadow" onClick={() => optionSelectHandler(option.label)}>{option.label}</div>
        </div>)
    })
    const clickHandler = () => {
        setDropdownOpen(!isDropdownOpen)
    }
    let constant = "Select..."
    if (value) {
        constant = value
    }
    return (<div className="relative w-48">
        <Panel onClick={clickHandler} className="flex justify-between bg-white-300 items-center">{constant}</Panel>
        { isDropdownOpen && 
            <Panel className="bg-white-300 absolute top-full ">
            {renderedOptions}
            </Panel>
        }
    </div>)
}

export default Dropdown