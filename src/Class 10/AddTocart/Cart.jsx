import React from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router'
import { remove } from './CartSlice'

const Cart = () => {

  let products = useSelector((state) => state.cart);
  let del = useDispatch();

  function removefromcart(id) {
    del(remove(id))
  }
  console.log(products)

  return (
    <div>
      <Link to="/"><button style={{ display: "flex" }}>
        <FaAngleLeft />
        Back
      </button></Link>
      <h1>My Cart</h1>

      {
        (products.length == 0) ?
          <h1>No Products Added To Bag</h1>
          :
          <>
          {
              products.map((el) => {
              return (
                <div>
                  <img src={el.thumbnail} alt="" />
                  <div>
                    <p>{el.title}</p>
                    <p>{el.price}</p>
                    <button onClick={() => { removefromcart(el.id) }}>Remove From Cart</button>
                  </div>
                </div>
              )
            })
          }
          </>
      }

    </div>
  )
}

export default Cart
