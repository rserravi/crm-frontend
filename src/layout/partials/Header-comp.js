import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export const Header = () => {
    return  (
    <Navbar 
        collapseOnSelect
        bg = "dark"     //color azul cyan
        variant="dark"  //color dark
        expand ="md"    //medium size screen
    >
        <Navbar.Brand>
            <img src={require('../../assets/img/logo.png')} alt="Logo of the company" width="58px" /> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="justify-content-end" style={{ width: "90%" }}>
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="/dashboard">Tickets</Nav.Link>
                <Nav.Link href="/dashboard">Logout</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}