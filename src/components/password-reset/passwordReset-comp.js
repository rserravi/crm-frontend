import React from "react";
import PropTypes from 'prop-types'; // ES6
import { Container, Row, Col, Form, FormGroup, FormLabel, FormControl, Button } from "react-bootstrap";

export const ResetPassword = ({ handleOnChange, handleOnResetSubmit, formSwitcher, email }) =>{
    return (
        <Container>
            <Row>
                <Col>
                    <h1 class="text-info">Reset Password</h1>
                    <hr />
                    <Form onSubmit={handleOnResetSubmit}>
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
                        
                       
                        <hr />
                        <Button type="submit">Reset Password</Button>
                    </Form>
                </Col>
            </Row>
            <p></p>
            <Row>
                <Col>
                    <a href="#!" onClick={() => formSwitcher("login")}> Back to login page</a>
                </Col>
            </Row>
        </Container>
    )
}

ResetPassword.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
}