import Link from "./Link";

function Sidebar() {
    const linksDetaails = [
        { label: "Button", to: "/button" },
        { label: "Dropdown", to: "/dropdown" },
        { label: "Accordion", to: "/" },
        { label: "Modal", to: "/modal" },
        {label:"Table" , to:"/table"}
    ]
    const renderedLinks = linksDetaails.map(link => {
        return (
            <Link key={link.to} to={link.to} activeClassName="font-bold border-l-4 border-blue-400 pl-2.5">
                {link.label}
            </Link>)
    })
    return (<div className="flex flex-col sticky top-0 items-start ">
        {renderedLinks}
    </div>)
}

export default Sidebar