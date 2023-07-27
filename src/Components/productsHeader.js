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
            {props.name}
        </div>
    );

}

export default productsHeader;