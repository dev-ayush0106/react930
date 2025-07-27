import React, { useEffect, useState } from 'react'
import ProductComponent from './ProductComponent';
import "./pagei.css"
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const AboutPagination = () => {
    let [products, setProducts] = useState([]);
    let [currentPage,setCurrentPage]=useState(0);

    let fetchData = async () => {
        let res = await fetch("https://dummyjson.com/products?limit=500");
        let data = await res.json();
        setProducts(data.products)
    }

    useEffect(() => {
        fetchData()
    }, [])

    let PAGE_SIZE=13;
    let totalProducts=products.length;
    let noOfPages=Math.ceil(totalProducts/PAGE_SIZE);
    let start=currentPage*PAGE_SIZE;
    let end=start+PAGE_SIZE

    console.log(products)

    function handlePage(n){
        setCurrentPage(n);
    }

    function prevPage(){
        if(currentPage>0){
            setCurrentPage(currentPage-1)
        }
    }
    function nextPage(){
        if(currentPage<noOfPages-1){
            setCurrentPage(currentPage+1);
        }
    }

    let navigate=useNavigate();


    // function prevPage(){
    //     setCurrentPage((prev)=>prev-1);
    // }
    // function nextPage(){
    //     setCurrentPage((prev)=>prev+1);
    // }

    return !products.length ? 
    (
        <h1>No Products Found</h1>
    ) :
       ( <div>
            {/* What is Pagination ?
            Pagination is technique where we divide the data in diffrent pages.
      */}

            <h1>Pagination</h1>
                <FaAngleLeft onClick={()=>{prevPage()}} className='left-right'/>
                {[...Array(noOfPages).keys()].map((n)=>(
                    <button className={(currentPage===n ? "active":"")} onClick={()=>{handlePage(n)}}>{n+1}</button>
                ))}
                <FaAngleRight onClick={()=>{nextPage()}} className='left-right'/>
            <div className="container">
            {products.slice(start,end).map((el) => (
                <div onClick={()=>{navigate(`/products/${el.id}`)}} className="product-container">
                    <img src={el.thumbnail} alt={el.title} />
                    <span>{el.title}</span>
                </div>
            ))}
            </div>


        </div>
    )
}

export default AboutPagination
