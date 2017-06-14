import React, { Component } from 'react';
import { Panel, Image, Table} from "react-bootstrap";

const Product = (props) => {
    
    const center = {
        textAlign: "center"
    }

    const title = (
        <h3 style={center}>Shopping Cart Detail</h3>
    );
    
    return(
        <Table responsive>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Qty</th>
                    <th>Unit Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.item.map( (detail, index) => (
                        <tr key={index}>
                            <td>
                                {detail.id}
                            </td>
                            <td>
                                {detail.name}
                            </td>
                            <td>
                                {detail.qty}
                            </td>
                            <td>
                                ${detail.price}
                            </td>
                        </tr>
                        )
                    )
                }
            </tbody>    
        </Table>
    );
}

export default Product; 