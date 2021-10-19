import React from "react";


export default function Home(){
    return(
        <div>
            <div className="add-to-cart">
                <img src="https://img.favpng.com/1/17/0/shopping-cart-icon-buy-icon-business-and-trade-icon-vm6PeQwd.jpg"></img>
            </div>
            <h1>Home component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                <img src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-8-iphone-x-png-27.png"/>
                </div>
                <div className="text-wrapper item">
                    <span>I-Phone</span>
                    <span>Price: $1000.00</span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}