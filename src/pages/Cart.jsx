import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import store from "../redux/store";
import { useSelector } from "react-redux";


const Cart = () => {

    const [cartItems, setCartItems] = useState()

    // useEffect(() => {

    // }, [cartItems])

    const data = useSelector((state) =>{
        return state.carts
    })

    console.log(data)
    return(
        <>
            <Navbar />

            <div className="container">
               <div className="row">
                <div className="col-md-10">
                    <div className="cartWrapper">
                        <div className="img">
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-2"></div>
               </div>
            </div>
        </>
    )
}

export default Cart