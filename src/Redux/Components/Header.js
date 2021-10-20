import React from "react";


export default function Header(props){
    console.log("Header",props.data)
    return(
        <div>
            <div className="add-to-cart">
                <span className="cart-count">{props.data.length}</span>
                <img alt="" src="https://img.favpng.com/1/17/0/shopping-cart-icon-buy-icon-business-and-trade-icon-vm6PeQwd.jpg"></img>
            </div>
            </div>
    )}