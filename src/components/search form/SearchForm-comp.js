import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterSearchTicket } from "../../pages/ticket-list/ticket-Action";

export const SearchForm = () => {
    const dispatch = useDispatch();
    const handleOnChange = (e) => {    
        const {value} = e.target;
        dispatch(filterSearchTicket(value));
    };
    return (
        <div>
            <Form>
                <Form.Group as = {Row}>
                    <Form.Label column sm={3}>Search: </Form.Label>
                    <Col ms={9}>
                        <Form.Control 
                            name="searchStr"
                            onChange={handleOnChange}
                            placeholder="Search..."
                        ></Form.Control>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}

