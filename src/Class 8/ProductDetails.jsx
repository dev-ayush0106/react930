import React, { useEffect, useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router'
import { add } from '../Class 10/AddTocart/CartSlice';

const ProductDetails = () => {
    let[product,setProduct]=useState([]);
    let{id}=useParams();
    let navigate=useNavigate();

    async function fetchProduct(){
        let data=await fetch(`https://dummyjson.com/products/${id}`);
        let jsonData=await data.json();
        setProduct(jsonData);
    }

    useEffect(()=>{
        fetchProduct();
    },[])

    let cartCount=useSelector((state)=>state.cart)
    console.log(cartCount)

    let dispatch=useDispatch();
    function addtobag(){
      dispatch(add(product))
    }
    
  return (

    <div >
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <button  onClick={()=>{navigate("/")}} >
            <FaAngleLeft/>
            Back
        </button>
        <Link to="/products/:id/cart"><h2>My Bag {cartCount.length}</h2></Link>
        </div>
        <h1>{product.title}</h1>
        <div style={{display:"flex",justifyContent:"center"}}>
      <img src={product.thumbnail} alt="" />
      <div style={{width:"500px"}}>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <button onClick={addtobag} style={{width:"200px",height:"50px",border:"none",backgroundColor:"blue",color:"white",borderRadius:"30px"}}>Add To Cart</button>
      </div>
      </div>
    </div>
  )
}

export default ProductDetails
