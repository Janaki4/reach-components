
function Table({ data, config }) {
  const renderedHeader = config.map(column => {
    if (column.header) {
      return column.header()
    }
    else { 
      return (
      <td className="p-3" key={column.label}>{column.label}</td>
      )
    }
  })

  const renderedBody = data.map((fruit) => {
    const renderedCell = config.map(column => { 
      return (<td className="p-3" key={column.label}>{column.render(fruit)}</td>)
    })
    return (<tr className="border-b" key={fruit.name}>{renderedCell}</tr>)
  } );

  return (
    <div>
      <table className="table-auto border-spacing-2">
        <thead>
          <tr className="border-b-2">
            {renderedHeader}
          </tr>
        </thead>
              <tbody>{renderedBody}</tbody>
      </table>
    </div>
  );
}

export default Table;
