import React, { useState, useEffect, useContext } from "react";
import "./Menu.css"
import UserContext from "./UserContext";
import BusinessApi from "./BusinessApi";


function Menu() {
    let { currentUser } = useContext(UserContext);
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        async function getMenu() {
            let menu = await BusinessApi.getMenu(currentUser);
            setMenu(menu);
        }

        getMenu();
    }, [currentUser]);


    async function removeData(id) {
        let res = await BusinessApi.deleteDish(currentUser, id);
        if (res) {
            const del = menu.filter(men => id !== men.id)
            setMenu(del)
        }

    }


    const renderHeader = () => {
        let headerElement = ['id', 'type', 'name', 'description', 'price', 'delete']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return menu && menu.map(({ id, type, name, description, price }) => {
            return (
                <tr key={id}>
                    <td>{id}</td>
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
        <>
            <h1 id='title'>Menu</h1>
            <table id='menu'>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
        </>
    );
}

export default Menu;