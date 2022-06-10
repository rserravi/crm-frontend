import React from "react";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export const BreadCrumbs = ({page}) =>{
    return (
        
        <Breadcrumb>
            <LinkContainer to="/">
                <BreadcrumbItem>Home</BreadcrumbItem>
            </LinkContainer>
            <BreadcrumbItem active>{page}</BreadcrumbItem>
        </Breadcrumb>
    )
}