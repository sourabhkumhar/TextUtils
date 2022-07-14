import React from 'react'

export default function Theme(props) {
    const floatingButton = {
        position: "fixed",
        bottom: "0px",
        right: "0px"
    }

    return (
        <div style={floatingButton}>
            <button onClick={props.toggleTheme} value="danger" className="btn btn-danger rounded-0">R</button>
            <button onClick={props.toggleTheme} value="primary" className="btn btn-primary rounded-0">B</button>
            <button onClick={props.toggleTheme} value="success" className="btn btn-success rounded-0">G</button>
        </div>
    )
}