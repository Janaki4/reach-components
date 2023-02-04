import useNavigationHook from "../hooks/useNavigationHook";
import classnames from "classnames";

function Link({ children, to ,activeClassName}) {
    const { navigate,currentPath } = useNavigationHook()
    const classes =
        classnames(
            "text-blue-500 italic m-1.5",
            currentPath===to && activeClassName
        )
    const clickHandler = (event) => {
        if (event.ctrlKey) { 
            return
        }
        event.preventDefault()
        navigate(to)
     }
    return (
        <a className={classes} onClick={clickHandler} href={to}>{children}</a>
    )
}

export default Link