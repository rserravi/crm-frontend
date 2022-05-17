import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BreadCrumbs } from "../../components/breadcrumbs/breadcrumbs-comp";
import { SearchForm } from "../../components/search form/SearchForm-comp";
import { TicketTable } from "../../components/ticket-table/TicketTable-comp";
import tickets from "../../assets/data/dummy-data.json"

export const TicketLists = () => {

    const [str, setStr] = useState("");
    const [dispTicket, setDispTicket] = useState(tickets);
    useEffect(() => {}, [str, dispTicket]);


    const handleOnChange = (e) => {
        const {value} = e.target;
        setStr(value);
        searchTicket(value);
    };

    const searchTicket = sstr =>{
        const filteredTickets = tickets.filter(row => row.subject.toLowerCase().includes(sstr.toLowerCase()));
        setDispTicket(filteredTickets);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <BreadCrumbs page = "Ticket Lists"></BreadCrumbs>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <Button variant="dark">Add New Ticket</Button>
                </Col>
                <Col className="text-right">
                    <SearchForm handleOnChange={handleOnChange} str={str}></SearchForm>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <TicketTable tickets={dispTicket}></TicketTable>
                </Col>
            </Row>
        </Container>
    )
}