import React from "react";
import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { replyOnTicket } from "../../pages/ticket-list/ticket-Action";

export const UpdateTicket = ({_id}) => {
    const {replyMsg,replyTicketError} = useSelector((state)=> state.tickets);

    const dispatch = useDispatch();
    const {user:{name}} = useSelector(state=> state.user)

    const [message, setMessage] = useState("");
    const handleOnChange = (e) =>{
        setMessage(e.target.value);
    };

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        const msgObj = {
            message,
            sender: name
        };
        dispatch(replyOnTicket(_id, msgObj))
        setMessage("");
    };

    return (
        <div>
            {replyMsg && <Alert variant="success" >{replyMsg}</Alert>}
            {replyTicketError && <Alert variant="danger">{replyTicketError}</Alert>}
        <Form onSubmit={handleOnSubmit}>
        <Form.Label>Reply</Form.Label><br />
        <Form.Text> Please replay your message here or update ticket</Form.Text>
        <Form.Control
            name="detail"
            value={message}
            onChange={handleOnChange}
            as="textarea"
            row="5"
        ></Form.Control>
        <div className="float-end mt-3 mb-3">
            <Button variant="dark" type="submit">Reply</Button>
        </div>
    </Form>
    </div>

    );
}