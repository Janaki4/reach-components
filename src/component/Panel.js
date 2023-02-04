import classnames from "classnames"

function Panel({ children,className, ...rest }) {
    const finalClassNames=classnames( className,"border rounded p-3 w-full shadow")
    return (
        <div className={finalClassNames} {...rest}>
            {children}
        </div>)
}

export default Panel
