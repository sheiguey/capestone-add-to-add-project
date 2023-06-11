import React, {useContext,useState} from "react"
import {context} from "../Context"
import CartItem from "../components/CartItem"
import Swal from "sweetalert2"

function Cart() {
    const {cartItems,EmptyCart} = useContext(context)
    const [ordering,setOrdering] =useState("Place Order")
    const [orderloading,setOrderloading] =useState(false)
    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))


    function PlaceOrder(){
        setOrderloading(true)
       setTimeout(()=>{
            setOrdering("Ordering...")
            Swal.fire({
                icon: 'success',
                title: 'order placed successfuly'
              })
            setOrderloading(false)
            EmptyCart()
            
        },3000)
     
    }
   
    
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total:{totalCostDisplay} </p>
            <div className="order-button">
            {
                cartItems.length > 0 ?
                <div className="order-button">
                    <button onClick={PlaceOrder}>{ordering}{orderloading===true&&<span className="order-loader"></span>}</button>
                </div> :
                <p>You have no items in your cart.</p>
            }
            </div>
        </main>
    )
}

export default Cart