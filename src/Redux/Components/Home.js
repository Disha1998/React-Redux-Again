import React from "react";


export default function Home(props){
    console.log("Home",props)
    return(
        <div>
            <h1>Home component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                <img alt ="" src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-8-iphone-x-png-27.png"/>
                </div>
                <div className="text-wrapper item">
                    <span>I-Phone</span>
                    <span>Price: $1000.00</span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={()=>props.addToCartHandler({price:1000,name:'i phone 11'})}>Add to Cart</button>
                    <button className="rmv-btn"onClick={()=>props.removeToCartHandler()}>Remove to Cart</button>
                </div>
            </div>
        </div>
    )
}