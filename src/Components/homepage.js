import React, {Component} from 'react';
import Title from './title';
import Products from './products';
import ProductsHeader from './productsHeader';
import menu from '../Assets/menu.json';

class homepage extends Component {

    constructor(){
        super();
        this.state = {
            products: [],
            brunchOptions: [],
            whiteWineOptions: [],

            showBrunchOptions: false,
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
        } else if(showOption === 'showWhiteWineOptions') {
            this.setState({
                showWhiteWineOptions: !this.state.showWhiteWineOptions
            })
        }
    }


    componentDidMount(){
        const data = menu;
        this.setState({
            products: data.filter(product => product.category === 'wine'),
            brunchOptions: data.filter(product => product.category === 'brunch'),
            whiteWineOptions: data.filter(product => product.category === 'whitewine'),
        })

    }

    render() {
        return (
            <div>
                <Title/>
                <ProductsHeader name='Brunch' onToggleShow={this.toggleShow} option='showBrunchOptions'/>
                {this.state.showBrunchOptions && 
                    <Products products={this.state.brunchOptions} onRemoveProduct={this.removeProduct} />
                }
                <ProductsHeader name='White Wines' onToggleShow={this.toggleShow} option='showWhiteWineOptions'/>
                {this.state.showWhiteWineOptions && 
                   <Products products={this.state.whiteWineOptions} onRemoveProduct={this.removeProduct} />
                }
            </div>
        );
    }
}

export default homepage;