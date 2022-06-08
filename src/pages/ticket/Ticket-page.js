import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BreadCrumbs } from "../../components/breadcrumbs/breadcrumbs-comp";
import tickets from "../../assets/data/dummy-data.json"
import { MessageHistory } from "../../components/message-history/MessageHistory-comp";
import { UpdateTicket } from "../../components/update-ticket/UpdateTicket-comp";
import { useParams } from "react-router-dom";

export const Ticket = () => {
    const {tid} = useParams();
    const [message, setMessage] = useState("");
    const [ticket, setTicket] = useState("");
    useEffect(() =>{
        for (let i = 0; i < tickets.length; i++){
            if(tickets[i].id === tid){
                setTicket(tickets[i]);
                continue;
         }
        }
    }, [message, tid]);

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
                <Col className="font-weight-bold text-secondary">
                    <div className="subject"><b>Subject :</b>{ticket.subject}</div>
                    <div className="date"><b>Date :</b>{ticket.addedAt}</div>
                    <div className="status"><b>Status :</b>{ticket.status}</div>
                </Col>
                <Col className="text-right">
                    <Button variant="outline-info">Close ticket</Button>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    {ticket.history && <MessageHistory msg = {ticket.history}></MessageHistory>}
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