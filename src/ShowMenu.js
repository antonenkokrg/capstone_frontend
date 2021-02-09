import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./Menu.css"
import UserContext from "./UserContext";
import BusinessApi from "./BusinessApi";
import Table from "./Table"
import { Container, Row, Col } from 'reactstrap';


function ShowMenu() {
    const { business } = useParams();

    let { currentUser } = useContext(UserContext);
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        async function getMenu() {
            try {
                let menu = await BusinessApi.getMenu(business);
                setMenu(menu);
            } catch (err) {
                setMenu([])
            }
        }

        getMenu();
    }, [business, setMenu]);


    async function removeData(id) {
        let res = await BusinessApi.deleteDish(currentUser, id);
        if (res) {
            const del = menu.filter(men => id !== men.id)
            setMenu(del)
        }

    }
    // async function addItem(data) {
    //     let res = await BusinessApi.postDish(currentUser, data);
    //     console.log(res)
    //     if (res) {
    //         setMenu([...menu, res.dish])
    //     }
    // }

    return (
        <Container>
            <Row>
                <Col sm={{ size: 'auto', offset: 1 }}>
                    {menu[0] ? <Table items={menu} removeData={removeData} /> : "No Menu"}

                </Col>
            </Row>
        </Container>
    );
}

export default ShowMenu;