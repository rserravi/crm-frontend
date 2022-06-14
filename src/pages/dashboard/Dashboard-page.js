import React, { useEffect } from "react";
import { Container, Row, Col, Button} from "react-bootstrap";
import { TicketTable } from "../../components/ticket-table/TicketTable-comp";
import { fetchAllTIckets } from "../ticket-list/ticket-Action";
import { BreadCrumbs } from "../../components/breadcrumbs/breadcrumbs-comp";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const Dashboard = () => {

    const dispatch = useDispatch();
    const {tickets} = useSelector(state => state.tickets)

    useEffect(() => {
        if(!tickets.length){
            dispatch(fetchAllTIckets());
        }
    }, [tickets, dispatch])

    const pendingTickets = tickets.filter(row=> row.status !== "closed")
    return (
        <Container>
            <Row>
                <Col>
                    <BreadCrumbs page="Dashboard"></BreadCrumbs>
                </Col>
            </Row>
            <Row>
                <Col className="text-center mt-5 mb-2">
                    <Link to = "/add-ticket">
                        <Button
                            variant="dark"
                            style={{"fontSize":"2rem", "padding":"18px 30px"}}
                        >Add New Ticket 
                        </Button>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col className="text-center mb-2">
                    <div>Total tickets: {tickets.length}</div>
                    <div>Pending tickets: {pendingTickets.length}</div>
                </Col>
            </Row>
            <Row>
                <Col className="mt-2">
                    Recently Added Tickets
                </Col>
            </Row>
            <Row>
                <Col className="recent-tickets">
                   <TicketTable tickets={tickets}></TicketTable>
                </Col>
            </Row>
        </Container>
    )
}