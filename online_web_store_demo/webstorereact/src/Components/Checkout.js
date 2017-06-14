import React, { Component } from 'react';
import { Panel, Button } from "react-bootstrap";

const Product = (props) => {
    
    const center = {
        textAlign: "center"
    }

    const greenText = {
        color: "green"
    }

    const checkOutButton = {
        marginTop: "30px"
    }

    return(
        <Panel style={center}>
            <h1>Cart Total</h1>
            <h1 style={greenText}>${props.total}</h1>
            <Button style={checkOutButton} onClick={props.checkout}>CheckOut</Button>
        </Panel>
    );
}

export default Product; 