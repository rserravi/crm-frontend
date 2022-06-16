import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const TicketTable = () => {
    const {searchTicketList, isLoading, error} = useSelector((state) => state.tickets);
    if(isLoading) return <h1>Loading ...</h1>;
    if(error) return <h1>{error}</h1>

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
                {searchTicketList.length ? (
                    searchTicketList.map((row) => (
                        <tr key={row._id}>
                            <td>{row._id}</td>
                            <td>
                                <Link to={"/ticket/"+ row._id}>
                                   {row.subject}
                                </Link>
                            </td>
                            <td>{row.status}</td>
                            <td>{row.openAt && new Date(row.openAt).toLocaleString() }</td>
                        </tr>
                    ))
                    ) : (
                    <tr >
                        <td colSpan="4" className="text-center">No tickets available{" "}</td>
                    </tr>
                    )
                }
            </tbody>
        </Table>
    )
}
