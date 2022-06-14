import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
import { BreadCrumbs } from "../../components/breadcrumbs/breadcrumbs-comp";
import { MessageHistory } from "../../components/message-history/MessageHistory-comp";
import { UpdateTicket } from "../../components/update-ticket/UpdateTicket-comp";
import { useParams } from "react-router-dom";
import { fetchSingleTIcket } from "../ticket-list/ticket-Action";
import { useDispatch, useSelector } from "react-redux";
import { closeTicket } from "../ticket-list/ticket-Action";
import { resetResponseMsg } from "../ticket-list/ticket-Slice";

export const Ticket = () => {
    const {tid} = useParams();
    const [message] = useState("");
    const dispatch = useDispatch();
    const {isLoading, error, selectedTicket, replyMsg, replyTicketError} = useSelector(state => state.tickets);
    useEffect(() =>{
        dispatch(fetchSingleTIcket(tid));
        return()=>{
            (replyMsg || replyTicketError) && dispatch(resetResponseMsg());
        }
    }, [message, tid, dispatch, replyMsg, replyTicketError]);

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
                   {replyTicketError && <Alert variant="danger">{replyTicketError}</Alert>}
                   {replyMsg && <Alert variant="success">{replyMsg}</Alert>}
                </Col>
            </Row>
            <Row>
                <Col className="font-weight-bold text-secondary">
                    <div className="subject"><b>Subject : </b>{selectedTicket.subject}</div>
                    <div className="date"><b>Date : </b>{selectedTicket.openAt && new Date(selectedTicket.openAt).toLocaleString()}</div>
                    <div className="status"><b>Status : </b>{selectedTicket.status}</div>
                </Col>
                <Col className="text-right">
                    <Button 
                        variant="outline-info" 
                        onClick={() => dispatch(closeTicket(tid))}
                        disabled = {selectedTicket.status === "closed"}
                        >Close ticket
                    </Button>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    {selectedTicket.conversation && <MessageHistory msg = {selectedTicket.conversation}></MessageHistory>}
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <UpdateTicket _id={tid}></UpdateTicket>
                </Col>
            </Row>
        </Container>
    )
}