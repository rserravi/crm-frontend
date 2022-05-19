import React from "react";
import { Container, Row, Col, Button} from "react-bootstrap";
import { TicketTable } from "../../components/ticket-table/TicketTable-comp";
import tickets from "../../assets/data/dummy-data.json"
import { BreadCrumbs } from "../../components/breadcrumbs/breadcrumbs-comp";
import { Link } from "react-router-dom";

export const Dashboard = () => {
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
                    <div>Total tickets: 50</div>
                    <div>Pending tickets: 5</div>
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