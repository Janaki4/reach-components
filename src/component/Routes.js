import useNavigationHook from "../hooks/useNavigationHook"

function Route({ children, path }) {
    const { currentPath } = useNavigationHook() 
    if (path === currentPath) return children
    return null
}

export default Route