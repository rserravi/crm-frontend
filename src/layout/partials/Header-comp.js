import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useNavigate} from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { userLogout } from "../../api/userApi";

export const Header = () => {
   
    const history = useNavigate();
    const LogMeOut = () =>{
        userLogout();
        sessionStorage.removeItem("accessJWT");
        localStorage.removeItem("crmSite");
        
        history("/");
    }
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
                <LinkContainer to="/dashboard"><Nav.Link>Dashboard</Nav.Link ></LinkContainer>
                <LinkContainer to="/tickets"><Nav.Link >Tickets</Nav.Link ></LinkContainer>
                <Nav.Link onClick={LogMeOut}>Logout</Nav.Link >
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}