import React,{useContext,useState} from "react"
import { context } from "../Context"

function CartItem({item}) {
    const {RemoveItem} = useContext(context)
    const [hovered, setHovered] = useState(false)
    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"
    return (
        <div className="cart-item">
            <i 
            className={iconClassName} 
            onClick={()=>RemoveItem(item.id)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            >
            </i>
            <img alt="imageitem" src={item.url} width="200px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem