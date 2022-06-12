import { React } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BreadCrumbs } from "../../components/breadcrumbs/breadcrumbs-comp";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm-comp";

export const AddTicket = () => {

       return (
        <Container>
            <Row>
                <Col>
                    <BreadCrumbs page="New Ticket"></BreadCrumbs>
                </Col>
            </Row>
            <Row>
                <Col>
                    <AddTicketForm />
                </Col>
            </Row>

        </Container>
    )
}