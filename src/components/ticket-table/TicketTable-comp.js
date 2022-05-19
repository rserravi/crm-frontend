import React from "react";
import { Table } from "react-bootstrap";
import PropTypes from 'prop-types'; // ES6
import { Link } from "react-router-dom";

export const TicketTable = ({tickets}) => {
    return (
        <Table bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Subject</th>
                    <th>Status</th>
                    <th>Opened Date</th>
                </tr>
            </thead>
            <tbody>
                {tickets.length ? (
                    tickets.map((row) => (
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>
                                <Link to={"/ticket/"+ row.id}>
                                   {row.subject}
                                </Link>
                            </td>
                            <td>{row.status}</td>
                            <td>{row.addedAt}</td>
                        </tr>
                    ))
                    ) : (
                    <tr >
                        <td colSpan="4" className="text-center">No tickets available</td>
                    </tr>
                    )
                }
            </tbody>
        </Table>
    )
}

TicketTable.propTypes = {
    tickets: PropTypes.array.isRequired,
}