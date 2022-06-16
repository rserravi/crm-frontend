import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types'; // ES6
import { Container, Row, Col, Form, FormGroup, FormLabel, FormControl, Button, Spinner, Alert } from "react-bootstrap";
import { loginPending, loginSuccess, loginFail } from "./loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../api/userApi";
import { useNavigate} from "react-router-dom";
import { getUserProfile } from "../../pages/dashboard/userAction";

export const LoginForm = ({formSwitcher}) =>{
    
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const {isLoading, isAuth, error} = useSelector(state => state.login);
    useEffect(()=>{
       (sessionStorage.getItem("accessJWT")) && navigation("/dashboard")
    },[navigation, isAuth]);
    const [email, setEmail] = useState("");   
    const [password, setPassword] = useState("");
    
        const handleOnChange = e =>{
            const {name, value} = e.target;
    
            switch(name){
                case "email":
                    setEmail(value);
                    break;
                case "password":
                    setPassword(value);
                    break;
                default:
                    break;
            }
        }
        const handleOnSubmit = async (e) =>{
            e.preventDefault();
            if (!email || !password){
                return alert("Fill up all the form!");
            }
            //TODO: Call api to submit the form
            dispatch(loginPending());

            try {
                const isAuth = await userLogin({email, password});
                if(isAuth.status === "error"){
                    return dispatch(loginFail(isAuth.message));
                }
                navigation("/dashboard");
                dispatch (loginSuccess());
                dispatch (getUserProfile());
            } catch (error) {
                dispatch(loginFail(error.message));
            }
        }

    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-info">Client Login</h1>
                    <hr />
                    {error && <Alert variant="danger">{error}</Alert> }
                    <Form onSubmit={handleOnSubmit}>
                        <FormGroup>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl
                                type = "email" 
                                name= "email"
                                value={email}
                                onChange={handleOnChange} 
                                placeholder="Type email"
                                required
                            />
                        </FormGroup>
                        <p></p>
                        
                        <FormGroup>
                            <FormLabel>Password</FormLabel>
                            <FormControl
                                type = "password" 
                                name= "password" 
                                value={password}
                                onChange={handleOnChange} 
                                placeholder="Type password"
                                required
                            />
                        </FormGroup>
                        <hr />
                        <Button type="submit">Login</Button>
                        {isLoading && <Spinner variant="primary" animation="grow"/> }

                    </Form>
                </Col>
            </Row>
            <p></p>
            <Row>
                <Col>
                    <a href="#!" onClick={() => formSwitcher("reset")}>Forget password?</a>
                </Col>
            </Row>
            <Row className="py-3">
                <Col>
                    Are you new here? <a href="/registration">Register now!</a>
                </Col>
            </Row>
        </Container>
    )
}

LoginForm.propTypes = {
    formSwitcher: PropTypes.func.isRequired,
}