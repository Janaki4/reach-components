import Table from "../component/Table";


function TablePage() {
    const data = [
        { name: "Apple", color: "bg-red-300", price: 145 },
        { name: "Orange", color: "bg-orange-300", price: 200 },
        { name: "Strawberry", color: "bg-pink-300", price: 100 },
        { name: "Guava", color: "bg-green-300", price: 50 },
    ]
    const config = [{
        label: "Fruit",
        render: (fruit) => fruit.name
    },
    {
        label: "Color",
        render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />
    },
    {
        label: "Price",
        render: (fruit) => fruit.price,
        header: () => (<td key="ajbf" className="bg-amber-300 p-3">Price</td>)
    }
    ]

    return (<Table data={data} config={config} />)
}

export default TablePage