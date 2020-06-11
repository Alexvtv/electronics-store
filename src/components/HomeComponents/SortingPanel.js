import React, { Component } from "react";

class SortingPanel extends Component {
    constructor() {
        super();
        this.state = {
            sortedBy: 'best match',
            sortedShown: false,
            minPriceValue: 0,
            maxPriceValue: 1000,
            selectedCountry: 'USA',
            countryShown: false
        }
    }

    showSortedOptions = option => {
        if(this.state.sortedShown == true) {
            this.setState({ sortedBy: option});
            this.props.setSortedOption(option);
        }
        this.setState({ sortedShown: !this.state.sortedShown })
    }

    changeMinValue = event => {
        this.setState({ minPriceValue: event.target.value });
        this.props.changeMinValue(event.target.value)
    }

    changeMaxValue = event => {
        this.setState({ maxPriceValue: event.target.value });
        this.props.changeMaxValue(event.target.value)
    }

    showCountry = option => {
        if(this.state.countryShown == true) {
            this.setState({ selectedCountry: option});
            this.props.setCountry(option);
        }
        this.setState({ countryShown: !this.state.countryShown })
    }

	render() {

        let sortedOptions = () => {
            if(this.state.sortedShown == false) {
                return(
                    <div className='value' onClick={this.showSortedOptions}><p>{ this.state.sortedBy } <span>&or;</span></p>
                    </div>
                )
            } else {
                return(
                    <div className='value' style={{animation: 'displaySorting 0.6s ease-in-out', height: '61px', border: '1px solid #b8bfd3'}}>
                        <ul>
                            <li onClick={() => this.showSortedOptions('best match')}>best match</li>
                            <li onClick={() => this.showSortedOptions('low price')}>low price</li>
                            <li onClick={() => this.showSortedOptions('high price')}>high price</li>
                        </ul>
                    </div>
                )
            }
        }

        let countryOptions = () => {
            if(this.state.countryShown == false) {
                return(
                    <div className='value' onClick={this.showCountry}><p>{ this.state.selectedCountry } <span>&or;</span></p>
                    </div>
                )
            } else {
                return(
                    <div className='value' style={{animation: 'displaySorting 0.6s ease-in-out', height: '61px', border: '1px solid #b8bfd3'}}>
                        <ul>
                            <li onClick={() => this.showCountry('USA')}>USA</li>
                            <li onClick={() => this.showCountry('RUS')}>RUS</li>
                            <li onClick={() => this.showCountry('CAN')}>CAN</li>
                        </ul>
                    </div>
                )
            }
        }

        return (
            <div className='sorting-panel'>
            	<div className='left-part'>
                    <p className='key sorted-by'>sort by:</p>
                    { sortedOptions() }
                </div>
                <div className='middle-part'>
                    <p className='key sorted-by'>price</p>
                    <input type='number' className='price-value' value={this.state.minPriceValue} onChange={this.changeMinValue} /> 
                    <p className='key sorted-by'> - </p>
                    <input type='number' className='price-value' value={this.state.maxPriceValue} onChange={this.changeMaxValue}/>
                    <div className='middle-part__shipping'>
                        <div className='checkbox'><p>&#10004;</p></div>
                        <p>Free Shipping</p>
                    </div>
                </div>
                <div className='right-part'>
                    <p className='key'>ship to:</p>
                    { countryOptions() }
                </div>
			</div>
        );
    }
} 

export default SortingPanel;