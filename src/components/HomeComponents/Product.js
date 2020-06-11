import React, { Component } from "react";

class Product extends Component {

    constructor() {
        super();
        this.state = {  
        }
    }

	render() {

        return (
            <div className='product' onClick={() => this.props.changeProductState(this.props.id)}>
            	<img className='product-image' src={ this.props.image } />
            	<p>{ this.props.name }</p>
            	<p className='product__color'>{ this.props.color }</p>
            	<p>${ this.props.price }</p>
			</div>
        );
    }
} 

export default Product;