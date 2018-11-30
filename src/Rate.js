import React from "react"

export default ({name, value}) => {
    return (
        <div className="rate-item">
            <span className="type">{name}</span>
            <span className="rate">
                <span className="value">{value}</span>
                <span className="percent">%</span>
            </span>
        </div>
    )
};