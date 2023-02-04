import { useState } from "react"
import { GoChevronDown, GoChevronRight } from "react-icons/go";
function Accordion({ items }) {

    const [expanded, setExpanded] = useState(100)
    const clickHandler = (idx) => {
        if (expanded === idx) {
            setExpanded(100)
        }
        else { 
            setExpanded(idx)
        }
    }

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expanded
        const contentDiv =
            <div className="bg-gray-300 flex items-center border border-gray-400 p-5 italic">
                {item.content}
            </div>
        const icon =<span  className="text-xl">{isExpanded ? <GoChevronDown/> : <GoChevronRight/>} </span>

        return (<div key={item.id}>
            <div className="flex items-center bg-gray-200 cursor-pointer p-3 border border-gray-200 justify-between" onClick={() => clickHandler(index)}>
                {item.label}
                {icon}
            </div>
            {isExpanded && contentDiv}
        </div>)
    })

    return (<div className="border-x border-t rounded">{renderedItems}</div>)
}

export default Accordion