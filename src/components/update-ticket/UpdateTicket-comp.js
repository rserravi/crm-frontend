import React from "react";
import { Form, Button } from "react-bootstrap";
import PropTypes from 'prop-types'; // ES6

export const UpdateTicket = ({msg, handleOnChange, handleOnSubmit}) =>{
    return (
        <Form onSubmit={handleOnSubmit}>
            <Form.Label>Reply</Form.Label><br />
            <Form.Text> Please replay your message here or update ticket</Form.Text>
            <Form.Control
                name="detail"
                value={msg}
                onChange={handleOnChange}
                as="textarea"
                row="5"
            ></Form.Control>
            <div className="float-end mt-3 mb-3">
                <Button variant="dark" type="submit">Reply</Button>
            </div>
        </Form>
    )
}

UpdateTicket.propTypes ={
    msg:PropTypes.string.isRequired,
    handleOnChange: PropTypes.func.isRequired,
}