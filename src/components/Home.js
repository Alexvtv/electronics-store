import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../home.scss';

import $ from 'jquery';
import '../slick/slick.scss';
import '../slick/slick-theme.scss';
import '../slick/slick.js';

import sliderPhone from "../images/slider-phone.png";

import ProductsProps from './HomeComponents/ProductsProps.js';
import Product from './HomeComponents/Product.js';
import SortingPanel from './HomeComponents/SortingPanel.js';

import customerImage1 from '../images/customers/customer1.png';
import customerImage2 from '../images/customers/customer2.png';
import customerImage3 from '../images/customers/customer3.png';

import logo2 from '../images/logo2.png';

import iconTwitter from '../images/icons/twitter.png';
import iconFacebook from '../images/icons/facebook.png';
import iconGoogle from '../images/icons/google.png';

class Home extends Component {
    constructor() {
    	super();
    	this.state = {	
            productPage: 1,
            numberOfProductPages: 3,
            loggedIn: false,
            sortedOption: 'best match',
            minPrice: 0,
            maxPrice: 1000,
            country: 'USA',
            selectedDevice: false,
            selectedBrands: [],
            freeDelivery: true,
            productFullState: false
    	}
    }

    startSlider = () => {
        $('.slider').slick({
          dots: true,
          infinite: false,
          speed: 1000,
          slidesToShow: 1
        });
    }

    componentDidMount() {
        this.startSlider();
    }

    setPage = (dataPage, pages) => {
        let { productPage, numberOfProductPages } = this.state;
        if(dataPage === 'minus') {
            if(productPage > 1) {
                productPage -= 1;
            }
        } else if(dataPage === 'plus') {
            console.log(pages);
            if(productPage*13 < pages) {
                productPage += 1;
            }
        } else {
            if(pages > (dataPage*13-13)) {
                productPage = dataPage;
            }
        }
        this.setState({ productPage: productPage });
    }

    setSortedOption = option => {
        this.setState({ sortedOption: option, productPage: 1 })
    }

    setCountry = option => {
        this.setState({ country: option })
    }

    changeMinValue = value => {
        this.setState({ minPrice: value, productPage: 1 })
    }

    changeMaxValue = value => {
        this.setState({ maxPrice: value, productPage: 1 });
    }

    selectDevice = device => {
        if(device == this.state.selectedDevice) {
            this.setState({selectedDevice: false, productPage: 1})
        } else {
            this.setState({selectedDevice: device, productPage: 1})
        }
    }

    selectBrand = brand => {
        let selectedBrands = this.state.selectedBrands;
        if(selectedBrands.includes(brand)) {
            selectedBrands.splice(selectedBrands.indexOf(brand), 1)
        } else {
            selectedBrands.push(brand)
        }
        this.setState({ selectedBrands: selectedBrands, productPage: 1 })
    }

    changeDeliveryOption = () => {
        this.setState({ freeDelivery: !this.state.freeDelivery })
    }

    changeProductState = id => {
        if(this.state.productFullState === false) {
            this.setState({ productFullState: id });
        } else {
            this.setState({ productFullState: false});
        }
    }

    orderNewProduct = id => {
        this.props.orderNewProduct(id);
        this.setState({ productFullState: false })
    }

	render() {
        let products = this.props.products;
        let { productPage, numberOfProductPages, sortedOption, minPrice, maxPrice, selectedDevice, selectedBrands } = this.state;

            let productsList,
                finalProducts;
            finalProducts = products.filter(item => (item.price >= minPrice) && (item.price <= maxPrice));

            // Сортировка по параметрам поиска 

                if(selectedDevice) {
                    finalProducts = finalProducts.filter(item => item.type == selectedDevice)
                }
                if(selectedBrands.length > 0) {
                    finalProducts = finalProducts.filter(item => selectedBrands.includes(item.brand))
                }
                if(sortedOption == 'low price') {
                     finalProducts = finalProducts.sort((a, b) => {
                        return a.price - b.price;
                    })
                } else if(sortedOption == 'best match') {
                    finalProducts = finalProducts.sort((a, b) => {
                        return a.position - b.position;
                    })
                } else if(sortedOption == 'high price') {
                    finalProducts = finalProducts.sort((a, b) => {
                        return b.price - a.price;
                    })
                }


 
            productsList = finalProducts.slice(((productPage-1)*13), (productPage*13)).map(item => {
                return (
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
            });

        let bestProducts = products.map(item => {
            if(item.best == true) {
                return (
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
            }
        });

        let productFullType = () => {
            if(this.state.productFullState !== false) {
                let characteristicList = products[this.state.productFullState].characteristic.map(item => {
                    return(
                        <p>{item.name}: <span>{item.value}</span><hr /></p>
                    )

                })
                return (
                    <div className='product-full-type__background'>
                        <div className='product-full-type'>
                            <div className='description'>
                                <img src={products[this.state.productFullState].image} />
                                <p>{products[this.state.productFullState].name}</p>
                                <p className='product__color'>{products[this.state.productFullState].color}</p>
                                <p>${products[this.state.productFullState].price}</p>
                                <button onClick={() => this.orderNewProduct(this.state.productFullState)}>add to cart</button>
                            </div>
                            <div className='characteristic'>
                                <p className='characteristic-head'> characteristic </p>
                                {characteristicList}
                                <button onClick={this.changeProductState}><p>&times;</p></button>
                            </div>
                        </div>
                    </div>
                )
            }
        }

        return (
        	<div>
                <div className='slider'>
                    <div className='slider-slide'>
                        <div className='slider-slide__content'>
                            <div>
                                <h2>iPhone 6 32Gb Black</h2>
                                <p>At first, for some time, I was not able to answer him one word; but as he had taken me in his arms I held fast by him, or I should have fallen to the ground.</p>
                                <button>buy now</button>
                            </div>
                            <img src={ sliderPhone } />
                        </div>
                    </div>
                    <div className='slider-slide'>
                        <div className='slider-slide__content'>
                            <div>
                                <h2>iPhone 6 32Gb Black</h2>
                                <p>At first, for some time, I was not able to answer him one word; but as he had taken me in his arms I held fast by him, or I should have fallen to the ground.</p>
                                <button>buy now</button>
                            </div>
                            <img src={ sliderPhone } />
                        </div>
                    </div>
                    <div className='slider-slide'>
                        <div className='slider-slide__content'>
                            <div>
                                <h2>iPhone 6 32Gb Black</h2>
                                <p>At first, for some time, I was not able to answer him one word; but as he had taken me in his arms I held fast by him, or I should have fallen to the ground.</p>
                                <button>buy now</button>
                            </div>
                            <img src={ sliderPhone } />
                        </div>
                    </div>
                    <div className='slider-slide'>
                        <div className='slider-slide__content'>
                            <div>
                                <h2>iPhone 6 32Gb Black</h2>
                                <p>At first, for some time, I was not able to answer him one word; but as he had taken me in his arms I held fast by him, or I should have fallen to the ground.</p>
                                <button>buy now</button>
                            </div>
                            <img src={ sliderPhone } />
                        </div>
                    </div>
                </div>

                <div className='home-main'>
                    <SortingPanel
                        setSortedOption={this.setSortedOption}
                        changeMaxValue={this.changeMaxValue}
                        changeMinValue={this.changeMinValue}
                        setCountry={this.setCountry}
                    />

                    <div className='products'>
                        <ProductsProps 
                            selectDevice={this.selectDevice}
                            selectedDevice={this.state.selectedDevice}
                            selectedBrands={this.state.selectedBrands}
                            selectBrand={this.selectBrand}
                            freeDelivery={this.state.freeDelivery}
                            changeDeliveryOption={this.changeDeliveryOption}
                        />
                        { productsList }
                    </div>

                    <div className='home-pages'>
                        <button className={(this.state.productPage == 1) ? 'inactive-page prev-page' : 'prev-page' } onClick={() => this.setPage('minus', finalProducts.length)}>&#8249;</button>
                        <button className={(this.state.productPage == 1) ? 'active-page' : {} } onClick={() => this.setPage(1, finalProducts.length)}>1</button>
                        <button className={(finalProducts.length > 13) ? ((this.state.productPage == 2) ? 'active-page' : {} ) : 'inactive-page'} onClick={() => this.setPage(2, finalProducts.length)}>2</button>
                        <button className={(finalProducts.length > 26) ? ((this.state.productPage == 3) ? 'active-page' : {} ) : 'inactive-page'} onClick={() => this.setPage(3, finalProducts.length)}>3</button>
                        <button className={(finalProducts.length > 39) ? ((this.state.productPage == 4) ? 'active-page' : {} ) : 'inactive-page'} onClick={() => this.setPage(4, finalProducts.length)}>4</button>
                        <button className={(finalProducts.length > 42) ? ((this.state.productPage == 5) ? 'active-page' : {} ) : 'inactive-page'} onClick={() => this.setPage(5, finalProducts.length)}>5</button>
                        <button className={(finalProducts.length <= this.state.productPage*13) ? 'inactive-page next-page' : 'next-page' } onClick={() => this.setPage('plus', finalProducts.length)}>&#8250;</button>
                    </div>

                    <div className='best-sellers'>
                        <div className='best-sellers__header'>
                            <p>best sellers</p>
                        </div>
                        <div className='best-sellers__main'>
                            { bestProducts }
                        </div>
                    </div>
                </div>

                <div className='customers'>
                    <h3>What Our Customers Have to Say</h3>
                    <p className='addition'>Couple of Words About This Stories Section</p>
                    <div className='customers-main'>
                        <div className='customer'>
                            <img src={ customerImage1 } />
                            <div>
                                <p className='customer-name'>Celia Fields</p>
                                <p className='addition'>UX Expert</p>
                            </div>
                            <p className='customer-idea'>This I have produced as a scantling of Jack’s great eloquence and the force of his reasoning upon such abstruse matters.</p>
                        </div>
                        <div className='customer'>
                            <img src={ customerImage2 } />
                            <div>
                                <p className='customer-name'>Alexander Lee</p>
                                <p className='addition'>Founder</p>
                            </div>
                            <p className='customer-idea'>Looking cautiously round, to ascertain that they were not overheard, the two hags cowered nearer to the fire, and chuckled heartily.</p>
                        </div>
                        <div className='customer'>
                            <img src={ customerImage3 } /> 
                            <div>
                                <p className='customer-name'>Lenora Sandoval</p>
                                <p className='addition'>Product Manager</p> 
                            </div>
                            <p className='customer-idea'>This sounded a very good reason, and Alice was quite pleased to know it. 'I never thought of that before!' she said.</p>  
                        </div>
                    </div>
                </div>

                <div className='home-footer'>
                    <div className='home-footer__content'>
                        <img src={logo2} />
                        <p>privacy policy <br /><span>terms and conditions</span></p>
                        <div>   
                            <img src={iconTwitter} />
                            <img src={iconFacebook} />
                            <img src={iconGoogle} />
                        </div>
                    </div>
                </div>
                { productFullType() }
        	</div>
        );
    }
} 

export default Home;