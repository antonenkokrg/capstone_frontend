import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ShowMenu.css"
import BusinessApi from "./BusinessApi";
import Mains from "./Mains";
import Extras from "./Extras";


function ShowMenu() {
    const { business } = useParams();

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

    const drinks = menu.filter(men => men.type === "Drink")
    const mains = menu.filter(men => men.type === "Main")
    const sides = menu.filter(men => men.type === "Side")

    function menuRender() {
        return (
            <>
                <Mains meals={mains} />
                <aside className="aside">
                    {sides[0] ? (<Extras type="Sides" items={sides} />) : " "}
                    <Extras type="Drinks" items={drinks} />
                </aside>
            </>)
    }


    return (
        <>
            <h1 className="text-center">Menu</h1>
            <div className="showmenu">
                <style type="text/css">
                    {`.navbar {display:none}`}
                </style>
                {menu[0] ? menuRender() : "Menu unavailable"}
            </div>
        </>
    );
}

export default ShowMenu;