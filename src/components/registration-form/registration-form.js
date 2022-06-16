import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button, Spinner, Alert } from "react-bootstrap";
import { useState } from "react";
import IntlTelInput from 'react-bootstrap-intl-tel-input'
import { userRegistration } from "./userRegistrationActions";
import { useDispatch, useSelector } from "react-redux";



const initialState = {
    name : "",
    phone : "",
    email : "",
    company : "",
    address : "",
    password : "",
    confirmPassword : ""
}

const passVerificationError = {
    isEight: false,
    isUpper: false,
    isLower: false,
    hasNumber: false,
    hasSpecial: false,
    confirmPass : false

}

var validPhone = false;

const RegistrationForm = () =>{
 
    const [newUser, setNewUser] = useState(initialState);
    const [passwordError, setNewPasswordError] = useState(passVerificationError);

    const dispatch = useDispatch();
    const {isLoading, status, message} = useSelector(state => state.registration)
    useEffect(() => {},[newUser]);

    const handleOnChange = e => {
        if (!e.target) {
            const name = "phone";
            const value = e.intlPhoneNumber;
            setNewUser({...newUser, [name]:value});
            validPhone = e.valid;
            return
        } 
        const {name, value} = e.target;

        setNewUser({...newUser, [name]:value});

        if(name === "password"){
            const isEight = value.length > 8;
            const isUpper = /[A-Z]/.test(value);
            const isLower = /[a-z]/.test(value);
            const hasNumber = /[0-9]/.test(value);
            const hasSpecial = /[@,#,$,%,&,+,-,:,.,?,¿,!,",·,(,),=,_]/.test(value);
            
            setNewPasswordError({...passwordError, isEight,isUpper, isLower,hasNumber, hasSpecial});
        }

        if (name === "confirmPassword"){
            setNewPasswordError({...passwordError, confirmPass: newUser.password === value});
        }
    
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        newUser.phone = newUser.phone.replace("+", "00");
        newUser.phone = newUser.phone.replace(/\s+/g, '');
        dispatch(userRegistration(newUser));
    }

    //connect user registration form to backend REST API and manage network state with Redux Toolkit
    //email user a link to verify the email
    //create frontend page to handle email verification than client recieves in ther email


    return (
        <Container>
            <Row>
                <Col>
                <h1 className="text-info">User Registration</h1>
                <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    {message && <Alert variant={status==="success" ? "success" : "danger"}>{message}</Alert>}
                </Col>
            </Row>

                <Form onSubmit={handleOnSubmit}>
                    <Row>
                        <Form.Group as={Col} className="mb-3" >
                            <Form.Label >Full Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="name" 
                                value={newUser.name} 
                                onChange={handleOnChange}
                                placeholder="Enter your full Name" />   
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control as={IntlTelInput}
                                name="phone" 
                                value={newUser.phone} 
                                placeholder="Enter phone number"
                                preferredCountries={['ES', 'AR']}
                                defaultCountry={'ES'}
                                defaultValue={''}
                                onChange={handleOnChange}
                                minLengthMessage="Too short"
                                maxLengthMessage="Too long"
                                callingCodeMessage=""
                                catchAllMessage="Not valid"
                                validMessage="Valid"
                                />  
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                type="email" 
                                name="email" 
                                value={newUser.email}
                                onChange={handleOnChange}
                                autoComplete ="off"
                                placeholder="Enter email" />   
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="company" 
                                value={newUser.company}
                                onChange={handleOnChange}
                                placeholder="Your company name" />   
                        </Form.Group>
                    </Row>
                    <Row>
                    <Form.Group className="mb-3" >
                        <Form.Label>Address</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="address" 
                            value={newUser.address} 
                            onChange={handleOnChange}
                            placeholder="Your adresss" />   
                    </Form.Group>
                    <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            name="password" 
                            value={newUser.password}
                            autoComplete ="new-password"
                            onChange={handleOnChange}
                            placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            name="confirmPassword" 
                            value={newUser.confirmPassword}
                            autoComplete ="new-password"
                            onChange={handleOnChange}
                            placeholder="Confirm Password" />
                    </Form.Group>
                    </Col>
                    <Col className="mt-4">
                    <Form.Text >
                        {!passwordError.confirmPass && <div className="text-danger mb-2">Passwords doesn't match</div>}
                    </Form.Text>
                   <br></br>
                    <ul className="mb-4">
                        <li className={passwordError.isEight ? "text-success" : "text-danger"}>Min 8 characters</li>
                        <li className={passwordError.isUpper ? "text-success" : "text-danger"}>Al teast One upper case</li>
                        <li className={passwordError.isLower ? "text-success" : "text-danger"}>Al least one lower case</li>
                        <li className={passwordError.hasNumber ? "text-success" : "text-danger"}>At least one number</li>
                        <li className={passwordError.hasSpecial ? "text-success" : "text-danger"}>At least one of the special characters .-_:!"@·#$%&/)=+*</li>
                    </ul>
                    </Col>
                    </Row>
                    <Button variant="primary" type="submit" disabled={Object.values(passwordError).includes(false) || !validPhone}>
                        Submit
                    </Button>
                    {isLoading && <Spinner variant="info" animation="border" />}
             
                </Form>   
            <Row className="mx-auto">
                <Col className="py-3" >
                Already have an account? <a href="/">Login now</a>
                </Col>
            </Row>  
        </Container>
    )
}

export default RegistrationForm;