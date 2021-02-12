import React, { useContext, useState } from "react";
import "./NavBar.scss";
import { NavLink } from "react-router-dom";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem, Collapse, NavbarToggler
} from 'reactstrap';
import UserContext from "./UserContext";

function NavBar({ logout }) {
    const { currentUser } = useContext(UserContext);
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    function loggedInNav() {
        return (
            <>
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
                    <NavLink className="nav-link nav-item" activeClassName="inactive" to="/" onClick={logout}>Log out</NavLink>
                </NavItem >
            </>
        );
    }

    function loggedOutNav() {
        return (
            <>
                <NavItem >
                    <NavLink className="nav-link" to="/login">Log in</NavLink>
                </NavItem >
            </>
        );
    }

    return (
        <Navbar className="Navigation navbar-light bg-lignt" expand="md">
            <NavbarBrand className="text-secondary" href="/">
                <img
                    alt=""
                    src="./logo.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />QR Menu</NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2 text-secondary" />
            <Collapse isOpen={!collapsed} navbar>
                <Nav className="navbar-nav ml-auto" navbar>
                    {currentUser ? loggedInNav() : loggedOutNav()}
                </Nav>
            </Collapse>
        </Navbar >
    );
}

export default NavBar;
