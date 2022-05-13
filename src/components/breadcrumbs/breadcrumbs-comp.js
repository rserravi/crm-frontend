import React from "react";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";

export const BreadCrumbs = ({page}) =>{
    return (
        <Breadcrumb>
            <BreadcrumbItem href="/">Home</BreadcrumbItem>
            <BreadcrumbItem active>{page}</BreadcrumbItem>
        </Breadcrumb>
    )
}