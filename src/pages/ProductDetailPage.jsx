import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactStars from 'react-rating-stars-component'
import Navbar from "../component/Navbar";
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions/cart-actions'
import { useParams } from "react-router-dom";






const ProductDetailPage = () => {
    const {id} = useParams()

    const [ product, setProduct ] = useState({})

    const dispatch = useDispatch()

    const onClickHandler = () => {
        dispatch(addToCart(product))
    }

    const getData = () => {
        axios.get('https://fakestoreapi.com/products/' + id)
            .then((response) => {
                console.log(response.data)
                setProduct(response.data)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getData()
    }, [id])



    return (
        <> 
            <Navbar />
            <div className="container">
            <div className="productWrapper">
                <div className="img">
                    <img
                        src={product.image}
                        alt=""
                        className="img-fluid"
                        height={'700px'}
                        width={'500px'}
                    />

                </div>

                <div className="content">
                        <h5>{product.title}</h5>
                        <br />
                        <p>{product.description}</p>
                        <p style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                       
                        </p>
                        
                        <h2>
                            <span style={{ fontSize: 20 }}>&#36; </span>
                            <small style={{ fontSize: 20 }}>{product.price}</small>
                        </h2>

                        <button className="btn btn-primary" onClick={onClickHandler}>Add to cart</button>
                </div>
            </div>
        </div>
        </>
        
    )
}

export default ProductDetailPage