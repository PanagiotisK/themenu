import React from "react";

// toggleShow = (x) => {
//     // console.log('will change:', x);
//     props.onToggleShow(x);
//   };

function productsHeader(props) {

    return (
        <div className="productsHeader" onClick={() => {
            props.onToggleShow(props.option)
        }}>
            <a>{props.name}</a>
        </div>
    );

}

export default productsHeader;