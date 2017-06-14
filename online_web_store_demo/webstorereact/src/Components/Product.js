import React, { Component } from 'react';
import { Panel, Image, Col, ListGroupItem, ListGroup, Button } from "react-bootstrap";

const Product = (props) => {

    function AddCart() {
        props.addCart(props.item.id);
    }
    
    const center = {
        textAlign: "center"
    }

    return(
        <Panel>
            <ListGroup fill>
                <ListGroupItem style={center}>
                    <Image responsive src={props.item.thumbNail} />
                    <h4>{props.item.name}</h4>
                    <div>{props.item.description}</div>
                    <h3>${props.item.price}</h3>
                </ListGroupItem>
                <ListGroupItem style={center}>
                    <Button bsStyle="success" onClick={AddCart}>Add To Cart</Button>       
                </ListGroupItem>
            </ListGroup>    
            
        </Panel>
    );
}

export default Product; 