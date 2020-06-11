import React, { Component } from "react";
import './cart.scss';
import Product from './HomeComponents/Product.js';

class Cart extends Component {

    constructor() {
        super();
        this.state = {  
        }
    }

    changeProductState = id => {
    }

	render() {
        let orderList;
        if(this.props.orderedProducts.length > 0) {
            orderList = this.props.orderedProducts.map(item => {
                return(
                    <Product
                        key={ item.position }
                        id={ item.position }
                        name={ item.name }
                        image={item.image}
                        color={item.color}
                        price={item.price}
                        changeProductState={this.changeProductState}
                    />
                )
            })
        } else {
            orderList = <h3>Список покупок пуст</h3>
        }

        return (
            <div className='cart'>
            	<h2 className='cart-headline'>Your Orders</h2>
                <div className='order'>
                    { orderList }
                </div>
			</div>
        );
    }
} 

export default Cart;