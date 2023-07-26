import React from "react";
import Product from "./product";

function products(props) {    
    return (
        <div className="products">
            {/* <span className="productsHeader">{props.name}</span> */}
            {props.products.map((product, index) => <Product key={index} product={product} onRemoveProduct={props.onRemoveProduct} />)}
        </div>
    );

}

export default products;