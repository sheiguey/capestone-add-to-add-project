import React,{useContext} from "react"
import { Link } from "react-router-dom"
import { context } from "../Context"

function Header() {
    const {cartItems} = useContext(context)
    const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"
    const numberOfItems = cartItems.length
    return (
        <header>
           <div className="header">
              <div className="phone-icon"><i className="ri-phone-fill"></i><p>+237655604155</p></div>
              <p>Get 50% off a seleted item | hurry up</p>
              <p>Douala, Cameroon</p>
           </div>
           <div className="nav">
            <Link to="/"> <h2>Pic Some</h2></Link>
            <Link to="/cart"><i className={`${cartClassName} ri-fw ri-2x`}>{numberOfItems!==0?<span className="numberOfItems">{numberOfItems}</span>:''}</i></Link> 
           </div>
          
        </header>
    )
}

export default Header