import React from "react";
import PropTypes from 'prop-types'; // ES6
import "./message-history-style.css";

export const MessageHistory = ({msg}) => {
    if (!msg) return null;
    
    return msg.map((row, i)=>
            <div key={i} className="message-history mt-3">
            <div className="send font-weight-bold text-secondary"> 
                <div className="sender"><b>{row.sender}</b></div>
                <div className="date">{row.msgAt}</div>
            </div>
            <div className="message">{row.message}</div>
        </div>
    )
}

MessageHistory.propTypes = {
    msg: PropTypes.array.isRequired,
}