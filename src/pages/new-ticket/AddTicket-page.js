import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BreadCrumbs } from "../../components/breadcrumbs/breadcrumbs-comp";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm-comp";
import { shortText } from "../../utils/validation";

const initialFrmDt = {
    subject : "",
    issueDate: null,
    detail : "",
}

const initialFrmError = {
    subject : false,
    issueDate: false,
    detail : false,
}

export const AddTicket = () => {

    const [frmData, setFrmData] = useState(initialFrmDt);
    const [frmDataError, setfrmDataError] = useState(initialFrmError);

    useEffect(() => {}, [frmData, frmDataError])

    const handleOnChange = (e) =>{
        const {name, value} = e.target;
        
        setFrmData({
            ...frmData,
            [name]: value,
        })
    }

    const handleOnSubmit = async(e) =>{
        e.preventDefault();
        
        setfrmDataError(initialFrmError);
        const isSubjectValid = await shortText(frmData.subject);

        setfrmDataError({
            ...frmDataError,
            subject: !isSubjectValid,
        });
    }

    return (
        <Container>
            <Row>
                <Col>
                    <BreadCrumbs page="New Ticket"></BreadCrumbs>
                </Col>
            </Row>
            <Row>
                <Col>
                    <AddTicketForm 
                        handleOnChange={handleOnChange} 
                        handleOnSubmit={handleOnSubmit} 
                        frmDt={frmData} 
                        frmDataError={frmDataError}
                    />
                </Col>
            </Row>

        </Container>
    )
}