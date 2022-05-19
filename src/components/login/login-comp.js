import React from "react";
import PropTypes from 'prop-types'; // ES6
import { Container, Row, Col, Form, FormGroup, FormLabel, FormControl, Button } from "react-bootstrap";

export const LoginForm = ({ handleOnChange, handleOnSubmit, formSwitcher, email, pass}) =>{
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-info">Client Login</h1>
                    <hr />
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
                                value={pass}
                                onChange={handleOnChange} 
                                placeholder="Type password"
                                required
                            />
                        </FormGroup>
                        <hr />
                        <Button type="submit">Login</Button>
                    </Form>
                </Col>
            </Row>
            <p></p>
            <Row>
                <Col>
                    <a href="#!" onClick={() => formSwitcher("reset")}>Forget password?</a>
                </Col>
            </Row>
        </Container>
    )
}

LoginForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
}