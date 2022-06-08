import React, { useEffect} from "react";
import { useDispatch } from "react-redux";
import { fetchAllTIckets } from "./ticket-Action";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BreadCrumbs } from "../../components/breadcrumbs/breadcrumbs-comp";
import { SearchForm } from "../../components/search form/SearchForm-comp";
import { TicketTable } from "../../components/ticket-table/TicketTable-comp";
import { Link } from "react-router-dom";


export const TicketLists = () => {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchAllTIckets());
    }, [dispatch]);

    return (
        <Container>
            <Row>
                <Col>
                    <BreadCrumbs page = "Ticket Lists"></BreadCrumbs>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                  <Link to ="/add-ticket">
                    <Button variant="dark">Add New Ticket</Button>
                  </Link>
                </Col>
                <Col className="text-right">
                    <SearchForm></SearchForm>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <TicketTable></TicketTable>
                </Col>
            </Row>
        </Container>
    )
}