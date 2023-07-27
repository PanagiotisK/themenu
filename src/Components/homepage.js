import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';

import ourMenu from '../Assets/ourMenu.json';

import Title from './title';
import ProductsHeader from './productsHeader';
import Products from './products';
import AddItem from './addItem';
import About from './about';

class homepage extends Component {

    constructor(){
        super();
        this.state = {
            products: [],
            brunchOptions: [],
            pastaOptions: [],
            sweetsOptions: [],
            whiteWineOptions: [],

            showBrunchOptions: false,
            showPastaOptions: false,
            showSweetsOptions: false,
            showWhiteWineOptions: false
        }
        this.removeProduct = this.removeProduct.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
    }

    removeProduct(item){
        this.setState((state) => ({
            products: state.products.filter(product => product.id !== item.id)
        }))
    }
    
    toggleShow(showOption) {
        if(showOption === 'showBrunchOptions') {
            this.setState({
                showBrunchOptions: !this.state.showBrunchOptions
            })
        } else if(showOption === 'showPastaOptions') {
            this.setState({
                showPastaOptions: !this.state.showPastaOptions
            })
        } else if(showOption === 'showSweetsOptions') {
            this.setState({
                showSweetsOptions: !this.state.showSweetsOptions
            })
        } else if(showOption === 'showWhiteWineOptions') {
            this.setState({
                showWhiteWineOptions: !this.state.showWhiteWineOptions
            })
        }
    }


    componentDidMount(){
        const data = ourMenu;
        this.setState({
            products: data.filter(product => product.category === 'wine'),
            brunchOptions: data.filter(product => product.category === 'brunch'),
            pastaOptions: data.filter(product => product.category === 'pasta'),
            sweetsOptions: data.filter(product => product.category === 'sweets'),
            whiteWineOptions: data.filter(product => product.category === 'whitewine'),
        })

    }

    render() {
        return (
            <div>
                <Route exact path="" render={() => (
                    <div>
                        <Title/>
                        
                        {/* BRUNCH */}
                        <ProductsHeader name='Brunch' onToggleShow={this.toggleShow} option='showBrunchOptions'/>
                        {this.state.showBrunchOptions && 
                            <Products products={this.state.brunchOptions} onRemoveProduct={this.removeProduct} />
                        }

                        {/* PASTA */}
                        <ProductsHeader name='Pasta' onToggleShow={this.toggleShow} option='showPastaOptions'/>
                        {this.state.showPastaOptions && 
                        <Products products={this.state.pastaOptions} onRemoveProduct={this.removeProduct} />
                        }
                        
                        {/* SWEETS */}
                        <ProductsHeader name='Sweets' onToggleShow={this.toggleShow} option='showSweetsOptions'/>
                        {this.state.showSweetsOptions && 
                        <Products products={this.state.sweetsOptions} onRemoveProduct={this.removeProduct} />
                        }

                        {/* WHITE WINE */}
                        <ProductsHeader name='White Wines' onToggleShow={this.toggleShow} option='showWhiteWineOptions'/>
                        {this.state.showWhiteWineOptions && 
                        <Products products={this.state.whiteWineOptions} onRemoveProduct={this.removeProduct} />
                        }
                    </div>
                )}/>
                
                <Route path="/AddItem" component = {AddItem}/>
                
                <Route path="/About" component = {About}/>

            </div>
        );
    }
}

export default homepage;