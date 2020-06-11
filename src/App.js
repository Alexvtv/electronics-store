import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './panel.scss';
import $ from 'jquery';

import Home from './components/Home.js';
import Cart from './components/Cart.js';
import Account from './components/Account.js';

import logo1 from './images/logo1.png';
import cartImage from './images/icons/cart.png';

import productImage0 from './images/products/product1.png'; 
import productImage1 from './images/products/product2.png'; 
import productImage2 from './images/products/product3.png'; 
import productImage3 from './images/products/product4.png'; 
import productImage4 from './images/products/product5.png'; 
import productImage5 from './images/products/product6.png'; 
import productImage6 from './images/products/product7.png'; 
import productImage7 from './images/products/product8.png'; 
import productImage8 from './images/products/product9.png'; 
import productImage9 from './images/products/product10.png'; 
import productImage10 from './images/products/product11.png'; 
import productImage11 from './images/products/product12.png'; 
import productImage12 from './images/products/product13.png'; 
import productImage13 from './images/products/product14.png'; 
import productImage14 from './images/products/product15.png'; 
import productImage15 from './images/products/product16.png'; 
import productImage16 from './images/products/product17.png'; 
import productImage17 from './images/products/product18.png'; 
import productImage18 from './images/products/product19.png'; 
import productImage19 from './images/products/product20.png'; 
import productImage20 from './images/products/product21.png'; 
import productImage21 from './images/products/product22.png';
import productImage22 from './images/products/product23.png';
import productImage23 from './images/products/product24.png';
import productImage24 from './images/products/product25.png';
import productImage25 from './images/products/product26.png';
import productImage26 from './images/products/product27.png';
import productImage27 from './images/products/product28.png';

class App extends Component {
    constructor() {
    	super();
    	this.state = {	
            products: [
                {name: 'Apple TV 32GB', color: 'black', price: 49.99, position: 0, image: productImage0, best: false, type: 'tv', brand: 'apple', characteristic: [{name: 'lorem1', value: 'ipsum1'}, {name: 'lorem2', value: 'ipsum2'}, {name: 'lorem3', value: 'ipsum3'}, {name: 'lorem4', value: 'ipsum4'}]},
                {name: 'Pebble Time Red', color: 'red', price: 29.99, position: 1, image: productImage1, best: false, type: 'watch', brand: 'pebble', characteristic: [{name: 'lorem1', value: 'ipsum1'}, {name: 'lorem2', value: 'ipsum2'}, {name: 'lorem3', value: 'ipsum3'}, {name: 'lorem4', value: 'ipsum4'}]},
                {name: 'Zendure 4-Port USB', color: 'white', price: 49.99, position: 2, image: productImage2, best: false, type: 'port', brand: 'zendure', characteristic: [{name: 'lorem1', value: 'ipsum1'}, {name: 'lorem2', value: 'ipsum2'}, {name: 'lorem3', value: 'ipsum3'}, {name: 'lorem4', value: 'ipsum4'}]},
                {name: 'Withings Smart Body Analyzer ws-50', color: 'black', price: 39.99, position: 3, image: productImage3, best: false, type: 'analyzer', brand: 'withings', characteristic: [{name: 'lorem1', value: 'ipsum1'}, {name: 'lorem2', value: 'ipsum2'}, {name: 'lorem3', value: 'ipsum3'}, {name: 'lorem4', value: 'ipsum4'}]},
                {name: 'JBL Charge 2+', color: 'black', price: 39.99, position: 4, image: productImage4, best: false, type: 'charge', brand: 'jbl', characteristic: [{name: 'lorem1', value: 'ipsum1'}, {name: 'lorem2', value: 'ipsum2'}, {name: 'lorem3', value: 'ipsum3'}, {name: 'lorem4', value: 'ipsum4'}]},
                {name: 'Ollo Clip New', color: 'silver', price: 19.99, position: 5, image: productImage5, best: false, type: 'clip', brand: 'ollo', characteristic: [{name: 'lorem1', value: 'ipsum1'}, {name: 'lorem2', value: 'ipsum2'}, {name: 'lorem3', value: 'ipsum3'}, {name: 'lorem4', value: 'ipsum4'}]},
                {name: 'Fitbit Charge HR Heart Rate and Activity Tracker', color: 'black', price: 19.99, position: 6, image: productImage6, best: false, type: 'tracker', brand: 'fitbit', characteristic: [{name: 'lorem1', value: 'ipsum1'}, {name: 'lorem2', value: 'ipsum2'}, {name: 'lorem3', value: 'ipsum3'}, {name: 'lorem4', value: 'ipsum4'}]},
                {name: 'Apple Watch Sport 38mm Silver Aluminum Case', color: 'white', price: 49.99, position: 7, image: productImage7, best: false, type: 'watch', brand: 'apple', characteristic: [{name: 'lorem1', value: 'ipsum1'}, {name: 'lorem2', value: 'ipsum2'}, {name: 'lorem3', value: 'ipsum3'}, {name: 'lorem4', value: 'ipsum4'}]},
                {name: 'Bose SoundLink On-Ear Headphones', color: 'white', price: 119.99, position: 8, image: productImage8, best: false, type: 'headphones', brand: 'bose', characteristic: [{name: 'lorem1', value: 'ipsum1'}, {name: 'lorem2', value: 'ipsum2'}, {name: 'lorem3', value: 'ipsum3'}, {name: 'lorem4', value: 'ipsum4'}]},
                {name: 'Sonos Play-1 Wireless HiFi System', color: 'black', price: 99.99, position: 9, image: productImage9, best: false, type: 'hifi', brand: 'sonos', characteristic: [{name: 'lorem1', value: 'ipsum1'}, {name: 'lorem2', value: 'ipsum2'}, {name: 'lorem3', value: 'ipsum3'}, {name: 'lorem4', value: 'ipsum4'}]},
                {name: 'Nest Learning Thermostat 3rd Generation', color: 'white', price: 49.99, position: 10, image: productImage10, best: false, type: 'thermostat', brand: 'nest', characteristic: [{name: 'lorem1', value: 'ipsum1'}, {name: 'lorem2', value: 'ipsum2'}, {name: 'lorem3', value: 'ipsum3'}, {name: 'lorem4', value: 'ipsum4'}]},
                {name: 'JBL Charge 2+', color: 'white', price: 39.99, position: 11, image: productImage11, best: false, type: 'charge', brand: 'jbl', characteristic: [{name: 'lorem1', value: 'ipsum1'}, {name: 'lorem2', value: 'ipsum2'}, {name: 'lorem3', value: 'ipsum3'}, {name: 'lorem4', value: 'ipsum4'}]},
                {name: 'JBL Charge 2+', color: 'grey', price: 39.99, position: 12, image: productImage12, best: false, type: 'charge', brand: 'jbl', characteristic: [{name: 'lorem1', value: 'ipsum1'}, {name: 'lorem2', value: 'ipsum2'}, {name: 'lorem3', value: 'ipsum3'}, {name: 'lorem4', value: 'ipsum4'}]},
                {name: 'JBL Charge 2+', color: 'gold', price: 39.99, position: 13, image: productImage13, best: false, type: 'charge', brand: 'jbl', characteristic: [{name: 'lorem1', value: 'ipsum1'}, {name: 'lorem2', value: 'ipsum2'}, {name: 'lorem3', value: 'ipsum3'}, {name: 'lorem4', value: 'ipsum4'}]},
                {name: 'JBL Charge 2+', color: 'sand', price: 39.99, position: 14, image: productImage14, best: false, type: 'charge', brand: 'jbl', characteristic: [{name: 'lorem1', value: 'ipsum1'}, {name: 'lorem2', value: 'ipsum2'}, {name: 'lorem3', value: 'ipsum3'}, {name: 'lorem4', value: 'ipsum4'}]},
                {name: 'JBL Charge 2+', color: 'teal', price: 39.99, position: 15, image: productImage15, best: false, type: 'charge', brand: 'jbl', characteristic: [{name: 'lorem1', value: 'ipsum1'}, {name: 'lorem2', value: 'ipsum2'}, {name: 'lorem3', value: 'ipsum3'}, {name: 'lorem4', value: 'ipsum4'}]},
                {name: 'JBL Charge 2+', color: 'blue', price: 39.99, position: 16, image: productImage16, best: false, type: 'charge', brand: 'jbl', characteristic: [{name: 'lorem1', value: 'ipsum1'}, {name: 'lorem2', value: 'ipsum2'}, {name: 'lorem3', value: 'ipsum3'}, {name: 'lorem4', value: 'ipsum4'}]},
                {name: 'JBL Charge 2+', color: 'camouflage', price: 39.99, position: 17, image: productImage17, best: false, type: 'charge', brand: 'jbl', characteristic: [{name: 'lorem1', value: 'ipsum1'}, {name: 'lorem2', value: 'ipsum2'}, {name: 'lorem3', value: 'ipsum3'}, {name: 'lorem4', value: 'ipsum4'}]},
                {name: 'JBL Charge 2+', color: 'red', price: 39.99, position: 18, image: productImage18, best: false, type: 'charge', brand: 'jbl', characteristic: [{name: 'lorem1', value: 'ipsum1'}, {name: 'lorem2', value: 'ipsum2'}, {name: 'lorem3', value: 'ipsum3'}, {name: 'lorem4', value: 'ipsum4'}]},
                {name: 'Apple Watch Sport 38mm Silver Aluminum Case', color: 'red', price: 49.99, position: 19, image: productImage19, best: false, type: 'watch', brand: 'apple', characteristic: [{name: 'lorem1', value: 'ipsum1'}, {name: 'lorem2', value: 'ipsum2'}, {name: 'lorem3', value: 'ipsum3'}, {name: 'lorem4', value: 'ipsum4'}]},
                {name: 'Apple Watch Sport 38mm Silver Aluminum Case', color: 'blue', price: 49.99, position: 20, image: productImage20, best: false, type: 'watch', brand: 'apple', characteristic: [{name: 'lorem1', value: 'ipsum1'}, {name: 'lorem2', value: 'ipsum2'}, {name: 'lorem3', value: 'ipsum3'}, {name: 'lorem4', value: 'ipsum4'}]},
                {name: 'Beanie', color: 'green', price: 29.99, position: 21, image: productImage21, best: true, type: 'clothes', characteristic: [{name: 'lorem1', value: 'ipsum1'}, {name: 'lorem2', value: 'ipsum2'}, {name: 'lorem3', value: 'ipsum3'}, {name: 'lorem4', value: 'ipsum4'}]},
                {name: 'T-Shirt With a Print', color: 'dark blue', price: 19.99, position: 22, image: productImage22, best: true, type: 'clothes', characteristic: [{name: 'lorem1', value: 'ipsum1'}, {name: 'lorem2', value: 'ipsum2'}, {name: 'lorem3', value: 'ipsum3'}, {name: 'lorem4', value: 'ipsum4'}]},
                {name: 'Pile-Lined Hooded Jacket', color: 'dark blue', price: 39.99, position: 23, image: productImage23, best: true, type: 'clothes', characteristic: [{name: 'lorem1', value: 'ipsum1'}, {name: 'lorem2', value: 'ipsum2'}, {name: 'lorem3', value: 'ipsum3'}, {name: 'lorem4', value: 'ipsum4'}]},
                {name: 'Trainers', color: 'space grey', price: 29.99, position: 24, image: productImage24, best: true, type: 'clothes', characteristic: [{name: 'lorem1', value: 'ipsum1'}, {name: 'lorem2', value: 'ipsum2'}, {name: 'lorem3', value: 'ipsum3'}, {name: 'lorem4', value: 'ipsum4'}]},
                {name: 'Apple Watch Sport 38mm Black Steel Case', color: 'black', price: 49.99, position: 25, image: productImage25, best: false, type: 'watch', brand: 'apple', characteristic: [{name: 'lorem1', value: 'ipsum1'}, {name: 'lorem2', value: 'ipsum2'}, {name: 'lorem3', value: 'ipsum3'}, {name: 'lorem4', value: 'ipsum4'}]},
                {name: 'Pebble Time Steel Black', color: 'black', price: 29.99, position: 26, image: productImage26, best: false, type: 'watch', brand: 'pebble', characteristic: [{name: 'lorem1', value: 'ipsum1'}, {name: 'lorem2', value: 'ipsum2'}, {name: 'lorem3', value: 'ipsum3'}, {name: 'lorem4', value: 'ipsum4'}]},
                {name: 'Pebble Time White', color: 'white', price: 29.99, position: 27, image: productImage27, best: false, type: 'watch', brand: 'pebble', characteristic: [{name: 'lorem1', value: 'ipsum1'}, {name: 'lorem2', value: 'ipsum2'}, {name: 'lorem3', value: 'ipsum3'}, {name: 'lorem4', value: 'ipsum4'}]}
            ],
            orderedProducts: [],
            activeScrollPanel: false,
            sandwichWasShown: false
    	}
    }

    changeScrollOption = () => {
        this.setState({ activeScrollPanel: !this.state.activeScrollPanel, sandwichWasShown: true })
    }

    orderNewProduct = id => {
        let orderedProducts = this.state.orderedProducts;
        orderedProducts.push(this.state.products[id]);
        this.setState({ orderedProducts: orderedProducts });
    }

	render() {

        let scrollPanel = () => {
            if(this.state.activeScrollPanel) {
                return(
                    <nav className='scroll-panel'>
                        <div className='main-panel'>
                            <div className='second-sandwitch' onClick={this.changeScrollOption}>
                                <div className='sandwitch__first-part'></div>
                                <div className='sandwitch__second-part'></div>
                                <div className='sandwitch__third-part'></div>
                            </div>
                            <ul className='navigation-panel'>    
                                <Link to='/'><li className='link home-link'>Home</li></Link>
                                <Link to='/account'><li className='link account-link'>Login</li></Link> 
                            </ul>
                            <Link to='/cart'>
                                <div className='cart'>
                                    <img className='cart-image' src={cartImage} />
                                    <p>cart</p>
                                    <div><p>{ this.state.orderedProducts.length }</p></div>
                                </div>
                            </Link>
                        </div>
                    </nav>
                )
            } else {
                return(
                    <div className={this.state.sandwichWasShown ? 'sandwitch sandwitchNotShown' : 'sandwitch sandwitchShown'} onClick={this.changeScrollOption}>
                        <div className='sandwitch__first-part'></div>
                        <div className='sandwitch__second-part'></div>
                        <div className='sandwitch__third-part'></div>
                    </div>
                )
            }
        }

        return (
            <Router>
        	    <div>
                    <nav>
                        <div className='main-panel'>
                            <img className='logo-image' src={logo1} />
                            <ul className='navigation-panel'>    
                                <Link to='/'><li className='link home-link'>Home</li></Link>
                                <Link to='/account'><li className='link account-link'>Login</li></Link> 
                            </ul>
                            <Link to='/cart'>
                                <div className='cart'>
                                    <img className='cart-image' src={cartImage} />
                                    <p>cart</p>
                                    <div><p>{ this.state.orderedProducts.length }</p></div>
                                </div>
                            </Link>
                        </div>
                    </nav>
                    <div>
                        <Route exact path='/cart' render={ ()=> <Cart orderedProducts={this.state.orderedProducts} /> }/>
                        <Route exact path='/' render={ ()=> <Home products={ this.state.products } orderNewProduct={this.orderNewProduct} /> }/>
                        <Route exact path='/account' render={ ()=> <Account /> }/>
                    </div>
                    { scrollPanel() }
        	    </div>
            </Router>
        );
    }
} 

export default App;