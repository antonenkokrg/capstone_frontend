import React, { useContext } from "react";
import "./NavBar.scss";
import { NavLink } from "react-router-dom";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import UserContext from "./UserContext";

function NavBar({ logout }) {
    const { currentUser } = useContext(UserContext);

    function loggedInNav() {
        return (
            <Nav className=" navbar-nav ml-auto" navbar>
                <NavItem >
                    <NavLink className="nav-link" to="/generateqr">Generate QR</NavLink>
                </NavItem >
                <NavItem >
                    <NavLink className="nav-link" to={`/show/${currentUser}`}>Final view</NavLink>
                </NavItem >
                <NavItem >
                    <NavLink className="nav-link" to="/menu">Menu</NavLink>
                </NavItem >
                <NavItem >
                    <NavLink className="nav-link nav-item" to="/" onClick={logout}>Log out</NavLink>
                </NavItem >
            </Nav >
        );
    }

    function loggedOutNav() {
        return (
            <Nav className="navbar-nav ml-auto" navbar>
                <NavItem >
                    <NavLink className="nav-link" to="/login">Log in</NavLink>
                </NavItem >
            </Nav >
        );
    }

    return (
        <Navbar className="Navigation" expand="md">
            <NavbarBrand className="text-secondary" href="/">
                <img
                    alt=""
                    src="./logo.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />QR Menu</NavbarBrand>
            {currentUser ? loggedInNav() : loggedOutNav()}
        </Navbar >
    );
}

export default NavBar;
