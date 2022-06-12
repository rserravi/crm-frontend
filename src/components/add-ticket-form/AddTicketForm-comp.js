import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col, Alert, Spinner} from "react-bootstrap";
import { shortText } from "../../utils/validation";
import { useDispatch, useSelector } from "react-redux";
import { openNewTicket } from "./addTicket-Actions";


const initialFrmDt = {
    subject : "",
    issueDate: "",
    message : "",
}

const initialFrmError = {
    subject : false,
    issueDate: false,
    message : false,
}

export const AddTicketForm = () => {
    const dispatch = useDispatch();
    const {user:{name}} = useSelector(state => state.user);
    const {isLoading, error, successMsg} = useSelector(state => state.openTicket);
    const [frmData, setFrmData] = useState(initialFrmDt);
    const [frmDataError, setfrmDataError] = useState(initialFrmError);

    useEffect(() => {}, [frmData, frmDataError])

    const handleOnChange = (e) =>{
        const {name, value} = e.target;
        
        setFrmData({
            ...frmData,
            [name]: value,
        })
    }

    const handleOnSubmit = async(e) =>{
        e.preventDefault();
        
        setfrmDataError(initialFrmError);
        const isSubjectValid = await shortText(frmData.subject);

        setfrmDataError({
            ...frmDataError,
            subject: !isSubjectValid,
        });

        dispatch(openNewTicket({...frmData, sender: name}));
    }

    return (
        <div className="jumbotron jumbotron-fluid">
            <h1 className="text-center">Add New Ticket</h1>
            <hr />
            <div>
               {error && <Alert variant="danger">{error}</Alert>}
               {successMsg && <Alert variant="success">{successMsg}</Alert>} 
               {isLoading && <Spinner variant="primary" animation="border" />} 
            </div>
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Subject:</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="subject"
                            value={frmData.subject}
                            onChange={handleOnChange}
                            placeholder ="Enter a subject"
                            required
                        />
                        <Form.Text className="text-danger">
                            {frmDataError.subject && "Subject must beetween 3 and 100 characters long"}
                        </Form.Text>
                    </Col>
                   
                </Form.Group>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Issue found:</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="issueDate"
                            value={frmData.issueDate}
                            type="date"
                            onChange={handleOnChange}
                            required
                        />
                    </Col>
                    
                </Form.Group>
                <Form.Group>
                    <Form.Label className="mt-2">Details</Form.Label>
                    <Form.Control
                        as = "textarea"
                        name="message"
                        value={frmData.message}
                        rows="10"
                        onChange={handleOnChange}
                        required
                    />
                </Form.Group>
                <div className="d-grid mt-2">
                    <Button type="submit" variant="dark" size="lg">Open Ticket</Button>
                </div>
            </Form>
        </div>
    )
}
