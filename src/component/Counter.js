import Panel from "./Panel";
import { useReducer } from "react";
import Button from "./Button"

function Counter({ initialCount }) {
    const reducer = (state, action) => {
        if (action.type === "submit") {
            return {
                ...state,
                count: state.valueToAdd + state.count,
                valueToAdd: 0
            }
        }
        else if (action.type === "increament") {
            return {
                ...state,
                count: state.count + 1
            }
        }
        else if (action.type === "set_value") {
            return {
                ...state,
                valueToAdd: action.payload
            }
        }
        else if (action.type === "decreament") {
            return {
                ...state,
                count: state.count - 1
            }
        }

        return state
    }
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    })

    const increamentHandler = () => {
        dispatch({
            type: "increament",
        })
    }
    const decreamentHandler = () => {
        dispatch({
            type: "decreament",
        })
    }

    const changeHandler = (event) => {
        const value = parseInt(event.target.value) || 0
        console.log(value);
        dispatch({
            type: "set_value",
            payload: value
        })
    }

    const submitHadler = (event) => {
        event.preventDefault()
        dispatch({
            type: "submit"
        })
    }
    return (
        <Panel >
            <label className="text-lg">{state.count}</label>
            <div className="flex flex-row">
                <Button onClick={increamentHandler}> Increament by one</Button>
                <Button onClick={decreamentHandler}> Decrement by one</Button>
            </div>
            <form className="flex flex-col" onSubmit={submitHadler}>
                <label>Add more count</label>
                <input onChange={changeHandler} className="p-3 b-2 br-1"
                    type="number" value={state.valueToAdd || ""} />
                <Button success rounded >Add</Button>
            </form>
        </Panel>)
}


export default Counter