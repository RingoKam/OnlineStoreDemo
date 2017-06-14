import React, { Component } from 'react';
import { Col } from "react-bootstrap";
import CheckOut from '../Components/Checkout';
import Cart from '../Components/CartDetail';
import axios from 'axios';

class Shopping extends Component {

     constructor() {
        super();
        this.state = {
            cart: null,
            total: 0
        };
        // this.state = {
        //     cart: {
        //         id: 0,
        //         created: "1",
        //         cartContent: [{
        //             id: 0,
        //             qty: 3,
        //             name: "testing",
        //             description: "testing here",
        //             thumbNail: "http://i.imgur.com/BApvnVsm.jpg",
        //             fullImage: "",
        //             price: 100 
        //         }]
        //     },
        //     total: 100
        // }
    }

    componentDidMount() {
        const urls = document.getElementById('urls');
        const getShoppingCartUrl = '/api' + urls.dataset.getCart;
        axios.get(getShoppingCartUrl).then((result) => {
            const cartTotal = (result.data.cartContent && result.data.cartContent.length > 0) 
                            ? result.data.cartContent.reduce(((acc, cur) => acc += (cur.price * cur.qty)), 0) 
                            : 0
            this.setState({
                cart: result.data,
                total: cartTotal
            })
        })
    };

    checkOut(cartid) {
        let history = this.context.router.history
        const urls = document.getElementById('urls');
        const checkoutShoppingCartUrl = '/api' + urls.dataset.checkoutCart;
        axios.post(checkoutShoppingCartUrl, {id: cartid}).then((result) => {
            history.push("/Success");
        })
    }

    render(){
        let cart;

        if(this.state.cart && this.state.cart.cartContent){
            cart = <Cart item={this.state.cart.cartContent}/>
        } else {
            cart = <div>Nothing in cart</div>
        }

        return(
            <div>
                <Col md={6}>
                    {cart}
                </Col>
                <Col md={6}>
                    <CheckOut total={this.state.total} checkout={() => this.checkOut(this.state.cart.id)}/>
                </Col>
            </div>
        );
    }
}

Shopping.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default Shopping