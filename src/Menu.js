import React, { useState, useEffect, useContext } from "react";
import "./Menu.css"
import UserContext from "./UserContext";
import BusinessApi from "./BusinessApi";
import Table from "./Table"
import NewForm from "./NewForm"
import { Container, Row } from 'reactstrap';


function Menu() {
    let { currentUser } = useContext(UserContext);
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        async function getMenu() {
            let menu = await BusinessApi.getMenu(currentUser);
            setMenu(menu);
        }

        getMenu();
    }, [currentUser, setMenu]);


    async function removeData(id) {
        let res = await BusinessApi.deleteDish(currentUser, id);
        if (res) {
            const del = menu.filter(men => id !== men.id)
            setMenu(del)
        }

    }
    async function addItem(data) {
        let res = await BusinessApi.postDish(currentUser, data);
        if (res) {
            setMenu([...menu, res.dish])
        }
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Table items={menu} removeData={removeData} />
            </Row>
            <NewForm addItem={addItem} />
        </ Container>
    );
}

export default Menu;