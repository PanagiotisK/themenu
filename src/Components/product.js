import React from "react";

function product(props) {
    const product = props.product;

    return (
        <div className="product">
            {product.title}<span className="price"> / {product.price} € </span>
            <span className="description"><br></br>{product.description}<br></br></span>
            {/* <button className="remove-button" onClick={() => {
                props.onRemoveProduct(product);
            }}>Remove</button> */}
            <span>__________</span>
        </div>
    );

}

export default product;