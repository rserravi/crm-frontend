import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
import { BreadCrumbs } from "../../components/breadcrumbs/breadcrumbs-comp";
import { MessageHistory } from "../../components/message-history/MessageHistory-comp";
import { UpdateTicket } from "../../components/update-ticket/UpdateTicket-comp";
import { useParams } from "react-router-dom";
import { fetchSingleTIcket } from "../ticket-list/ticket-Action";
import { useDispatch, useSelector } from "react-redux";

export const Ticket = () => {
    const {tid} = useParams();
    const [message, setMessage] = useState("");
    const [ticket, setTicket] = useState("");
    const dispatch = useDispatch();
    const {isLoading, error, selectedTicket} = useSelector(state => state.tickets);
    useEffect(() =>{
        dispatch(fetchSingleTIcket(tid));
    }, [message, tid, dispatch]);

    const handleOnChange = e =>{
        setMessage(e.target.value)
    }

    const handleOnSubmit = () =>{
        alert("Form submited") //waiting to implement API
    }

    return (
        <Container>
            <Row>
                <Col>
                    <BreadCrumbs page={"Ticket"}></BreadCrumbs>
                </Col>
            </Row>
            <Row>
                <Col>
                   {isLoading && <Spinner variant="Primary" animation="border" />}
                   {error && <Alert variant="danger">{error}</Alert>}
                </Col>
            </Row>
            <Row>
                <Col className="font-weight-bold text-secondary">
                    <div className="subject"><b>Subject : </b>{selectedTicket.subject}</div>
                    <div className="date"><b>Date : </b>{selectedTicket.openAt}</div>
                    <div className="status"><b>Status : </b>{selectedTicket.status}</div>
                </Col>
                <Col className="text-right">
                    <Button variant="outline-info">Close ticket</Button>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    {selectedTicket.conversation && <MessageHistory msg = {selectedTicket.conversation}></MessageHistory>}
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <UpdateTicket msg={message} handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit}></UpdateTicket>
                </Col>
            </Row>
        </Container>
    )
}