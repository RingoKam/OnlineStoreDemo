import React, { Component } from 'react';
import { Col } from "react-bootstrap";
import Product from '../Components/Product';
import axios from 'axios';

class Shopping extends Component {
    
    constructor() {
        super();
        this.state = {
            products: null
        };
        // this.state = {
        //     products: [{
        //         id: 0,
        //         name: "testing",
        //         description: "Testing Here",
        //         thumbNail: "http://i.imgur.com/BApvnVsm.jpg",
        //         fullImage: "http://i.imgur.com/BApvnVsm.jpg",
        //         price: 100,
        //         productCreated: "",
        //     }]
        // }
    }

    componentDidMount() {
        const url = '/api' + document.getElementById('urls').dataset.getProduct;
        axios.get(url).then((result) => {
            this.setState({
                products: result.data
            })
        })
    };

    RenderProducts() {
        const AddCart = (productId) => {
            const url = '/api' + document.getElementById('urls').dataset.updateCart;
            axios.post(url, {productId, qty:1}).then((result) => {
                alert("Updated!");            
            })
        }

        return this.state.products.map((product, index) => {
            return (
                <Col md={3} key={index}>
                    <Product item={product} addCart={AddCart} />
                </Col>
            );
        })
    };

    render(){
        let result;
        if(this.state.products !== null){
            result = this.RenderProducts()
        } else {
            result = <Col md={12}>Loading</Col>
        }
        return(
            <div>
                {result}
            </div>
        )
    }
}

export default Shopping