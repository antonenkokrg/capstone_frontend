import React from "react";



function Table({ items, removeData }) {
    const renderHeader = () => {
        let headerElement = ['type', 'name', 'description', 'price', 'delete']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return items && items.map(({ id, type, name, description, price }) => {
            return (
                <tr key={id}>
                    <td>{type}</td>
                    <td>{name}</td>
                    <td>{description}</td>
                    <td>{price}</td>
                    <td className='opration'>
                        <button className='button' onClick={() => removeData(id)}>Delete</button>
                    </td>
                </tr>
            )
        })
    }
    return (
        <div>
            <h1 id='title'>Menu</h1>
            <table id='menu'>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
        </div>
    )
}

export default Table;