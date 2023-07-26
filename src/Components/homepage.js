import React, {Component} from 'react';
import Title from './title';
import Products from './products';
import ProductsHeader from './productsHeader';
import product from './product';

class homepage extends Component {

    constructor(){
        super();
        this.state = {
            products: [],
            brunchOptions: [],
            whiteWineOptions: []
        }
        this.removeProduct = this.removeProduct.bind(this);
    }

    removeProduct(item){
        this.setState((state) => ({
            products: state.products.filter(product => product.id !== item.id)
        }))
    }

    componentDidMount(){
        const data = simulateFetchDataFromDB();
        this.setState({
            products: data.filter(product => product.category == 'wine'),
            brunchOptions: data.filter(product => product.category == 'brunch'),
            whiteWineOptions: data.filter(product => product.category == 'whitewine'),
        })

    }

    render() {
        return (
            <div>
                <Title/>
                <ProductsHeader name='Brunch'/>
                <Products products={this.state.brunchOptions} onRemoveProduct={this.removeProduct} />
                <ProductsHeader name='White Wines'/>
                <Products products={this.state.whiteWineOptions} onRemoveProduct={this.removeProduct} />
            </div>
        );
    }
}

function simulateFetchDataFromDB(){
    return [
        {
            id:"0",
            title:"Ροδίτης, Κτήμα Τάτση",
            price:"27.30 ",
            description: 'Τανίνι Αγάπη Μου / 2023',
            category: 'whitewine'
        },
        {
            id:"1",
            title:"title 02",
            price:"19.99",
            description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.',
            category: 'brunch'
        },
        {
            id:"2",
            title:"title 03",
            price:"9.99",
            description: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.',
            category: 'brunch'
        }
    ]
}

export default homepage;