import React,{useState,useContext} from "react"
import { context } from "../Context"
import PropTypes from 'prop-types'

function Image({className,img}) {
   const [hovered,setHovered]=useState(false)
   const {toggleFavorite,AdImageToCart,cartItems,RemoveItem} = useContext(context)
    


   function heartIcon() {
    if(img.isFavorite) {
        return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
    } else if(hovered) {
        return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
    }
}
  
  function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if(alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={()=>RemoveItem(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-add-circle-line cart" onClick={() => AdImageToCart(img)}></i>
        }
    }
 
    return (
        <div  
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`${className} image-container`}>
            <img  alt="imagedta" src={img.url} className="image-grid"/>
               {heartIcon()}
               {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image
