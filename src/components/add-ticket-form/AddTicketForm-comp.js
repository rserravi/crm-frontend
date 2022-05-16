import React from "react";
import { Button, Form, Row, Col} from "react-bootstrap";
import { PropTypes } from "prop-types";

export const AddTicketForm = ({handleOnChange, handleOnSubmit, frmDt, frmDataError}) => {
    
    console.log(frmDt);
    return (
        <div className="jumbotron jumbotron-fluid">
            <h1 className="text-center">Add New Ticket</h1>
            <hr />
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
                <Form.Group as={Row}>
                    <Form.Label column sm={3}>Subject:</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="subject"
                            value={frmDt.subject}
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
                            value={frmDt.issueDate}
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
                        name="detail"
                        value={frmDt.detail}
                        rows="10"
                        onChange={handleOnChange}
                        required
                    />
                </Form.Group>
                <div className="d-grid mt-2">
                    <Button type="submit" variant="dark" size="lg">Submit</Button>
                </div>
            </Form>
        </div>
    )
}

AddTicketForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    frmDt: PropTypes.object.isRequired,
    frmDataError: PropTypes.object.isRequired,
}