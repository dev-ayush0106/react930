import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';

const FetchAxios = () => {
    // let [data,setData]=useState({});
    // let url="https://dog.ceo/api/breeds/image/random";
    
    // Fetch Method
    // useEffect(()=>{
    //     fetch(url)
    //     .then((res)=>{ // non-readable format
    //         return res.json() // promise return
    //     })
    //     .then((source)=>{
    //         setData(source);
    //     })
    //     .catch((err)=>{
    //         console.log("Error:",err);
    //     })
    // },[])

    // Axios Method : get , put ,post,patch,delete
    // Client side : call api : get method

    // useEffect(()=>{
    //     axios.get(url)
    //     .then((source)=>{
    //         setData(source.data)
    //     })
    // },[]);
    // console.log(data);

    // Dashboard by fetching API and using Bootstrap
    let [data,setData]=useState([]);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            setData(res.data);
        })
    })

    let card=data.map((el)=>(
            <>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.image} />
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>
          {`$ ${el.price}`}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>
        
    ))

    console.log(data);
  return (
    <div>
      {/* <h1>Fetch & Axios</h1>
      <img src={data.message} alt="" /> */}

      <h1>DashBoard</h1>
      <div className="container">
      <div className="row g-5 justify-content-evenly">
        {card}
      </div>
      </div>

    </div>
  )
}

export default FetchAxios
