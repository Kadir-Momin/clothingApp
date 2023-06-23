import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cart-actions";


const SubCategory = () => {
    const {catName} = useParams()

    const [subCategory, setSubCategory] = useState([])
    const dispatch = useDispatch

    const getData = () => {
        axios.get('https://fakestoreapi.com/products/category/' + catName)
            .then((response) => {
                console.log(response.data)
                setSubCategory(response.data)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getData()
    }, [catName])

    // const clickHandler = (cartProduct) => {
    //     dispatch(addToCart(cartProduct))
    // }

    return (
        <>
            <Navbar />
            <div className="text-center">SubCategory</div>
            <div className="row">
                {
                    subCategory.map((cartProduct) => (
                        <div className="col-sm-3">
                            <div className="card">
                                <div className="card-body">
                                    <img
                                        src={cartProduct.image}
                                        alt=""
                                        className="img-fluid"
                                    />
                                    <h5 className="card-title">{cartProduct.title}</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a
                                     href="#" 
                                     className="btn btn-primary btn-block" 
                                     
                                    >Add to Cart</a>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default SubCategory