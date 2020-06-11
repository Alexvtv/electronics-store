import React, { Component } from "react";

class ProductsProps extends Component {

	render() {

		let deliveryCheckbox = () => {
			if(this.props.freeDelivery) {
				return(
					<div className='delivery-active'>
            			<div>
            			</div>
            		</div>
            	)
            } else {
            	return(
            		<div onClick={this.props.changeDeliveryOption}>
            			<div>
            			</div>
            		</div>
            	)
            }
        }

        let secondDeliveryCheckbox = () => {
			if(!this.props.freeDelivery) {
				return(
					<div className='delivery-active'>
            			<div>
            			</div>
            		</div>
            	)
            } else {
            	return(
            		<div onClick={this.props.changeDeliveryOption}>
            			<div>
            			</div>
            		</div>
            	)
            }
        }

        return (
            <div className='products__props'>
            	<div>
            		<p>devices</p>
            		<ul>
            			<li className={this.props.selectedDevice == 'watch' ? 'active-device-type' : {}} onClick={() => this.props.selectDevice('watch')}>Watch</li>
            			<li className={this.props.selectedDevice == 'charge' ? 'active-device-type' : {}} onClick={() => this.props.selectDevice('charge')}>Charge</li>
            			<li className={this.props.selectedDevice == 'clothes' ? 'active-device-type' : {}} onClick={() => this.props.selectDevice('clothes')}>Clothes</li>
            			<li className={this.props.selectedDevice == 'clip' ? 'active-device-type' : {}} onClick={() => this.props.selectDevice('clip')}>Clip</li>
            			<li className={this.props.selectedDevice == 'analyzer' ? 'active-device-type' : {}} onClick={() => this.props.selectDevice('analyzer')}>Analyzer</li>
            			<li className={this.props.selectedDevice == 'tv' ? 'active-device-type' : {}} onClick={() => this.props.selectDevice('tv')}>TV</li>
            			<li className={this.props.selectedDevice == 'hifi' ? 'active-device-type' : {}} onClick={() => this.props.selectDevice('hifi')}>HiFi</li>
            			<li className={this.props.selectedDevice == 'port' ? 'active-device-type' : {}} onClick={() => this.props.selectDevice('port')}>Port</li>
            			<li className={this.props.selectedDevice == 'tracker' ? 'active-device-type' : {}} onClick={() => this.props.selectDevice('tracker')}>Tracker</li>
            			<li className={this.props.selectedDevice == 'headphones' ? 'active-device-type' : {}} onClick={() => this.props.selectDevice('headphones')}>Headphones</li>
            			<li className={this.props.selectedDevice == 'thermostat' ? 'active-device-type' : {}} onClick={() => this.props.selectDevice('thermostat')}>Thermostat</li>
            		</ul>
            	</div>

            	<div>
            		<p>brands</p>
            		<div className='brand'>
            			<div className={this.props.selectedBrands.includes('apple') ? 'brand-active' : {}} onClick={() => this.props.selectBrand('apple')}>
            				<p>&#10004;</p>
            			</div>
            			<p>apple</p>
            		</div>
            		<div className='brand'>
            			<div className={this.props.selectedBrands.includes('jbl') ? 'brand-active' : {}} onClick={() => this.props.selectBrand('jbl')}>
            				<p>&#10004;</p>
            			</div>
            			<p>jbl</p>
            		</div>
            		<div className='brand'>
            			<div className={this.props.selectedBrands.includes('pebble') ? 'brand-active' : {}} onClick={() => this.props.selectBrand('pebble')}>
            				<p>&#10004;</p></div>
            			<p>pebble</p>
            		</div>
            		<div className='brand'>
            			<div className={this.props.selectedBrands.includes('zendure') ? 'brand-active' : {}} onClick={() => this.props.selectBrand('zendure')}>
            				<p>&#10004;</p>
            			</div>
            			<p>zendure</p>
            		</div>
            		<div className='brand'>
            			<div className={this.props.selectedBrands.includes('withings') ? 'brand-active' : {}} onClick={() => this.props.selectBrand('withings')}>
            				<p>&#10004;</p>
            			</div>
            			<p>withings</p>
            		</div>
            		<div className='brand'>
            			<div className={this.props.selectedBrands.includes('ollo') ? 'brand-active' : {}} onClick={() => this.props.selectBrand('ollo')}>
            				<p>&#10004;</p>
            			</div>
            			<p>ollo</p>
            		</div>
            		<div className='brand'>
            			<div className={this.props.selectedBrands.includes('fitbit') ? 'brand-active' : {}} onClick={() => this.props.selectBrand('fitbit')}>
            				<p>&#10004;</p>
            			</div>
            			<p>fitbit</p>
            		</div>
            		<div className='brand'>
            			<div className={this.props.selectedBrands.includes('bose') ? 'brand-active' : {}} onClick={() => this.props.selectBrand('bose')}>
            				<p>&#10004;</p>
            			</div>
            			<p>bose</p>
            		</div>
            		<div className='brand'>
            			<div className={this.props.selectedBrands.includes('sonos') ? 'brand-active' : {}} onClick={() => this.props.selectBrand('sonos')}>
            				<p>&#10004;</p>
            			</div>
            			<p>sonos</p>
            		</div>
            		<div className='brand'>
            			<div className={this.props.selectedBrands.includes('nest') ? 'brand-active' : {}} onClick={() => this.props.selectBrand('nest')}>
            				<p>&#10004;</p>
            			</div>
            			<p>nest</p>
            		</div>
            	</div>

            	<div className='delivery'>
            		<p>delivery options</p>
            		<div>
            			{ deliveryCheckbox() }
            			<p>free</p>
            		</div>
            		<div>
            			{ secondDeliveryCheckbox() }
            			<p>$4.99</p>
            		</div>
            	</div>
			</div>
        );
    }
} 

export default ProductsProps;