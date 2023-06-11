import React,{createContext,useState,useEffect} from "react";



const context = createContext()

function ContextProvider (props){
    const [photosArr,setPhotoArr] =useState([])
    const [cartItems,setCartItems] = useState([])
    const [preloader,setPreloader]=useState(false)

    function AdImageToCart(img){
        return (
            setCartItems(prevCartItems=>[...prevCartItems,img])
           
        ) 
    }

    useEffect(
        ()=>{
            isLoading()
            getPhotos();
            
        }
    ,[])

   function isLoading(){
    setPreloader(prevPreloader=>!prevPreloader)
   }    
    function getPhotos(){
        return (
            fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
            .then(res=>res.json())
            .then(data=>(setPhotoArr(data)))
            .then(()=>setPreloader(false))
            .catch(error=>{
                console.log(error)
            })
        )
    }

    function toggleFavorite(id) {
        const updatedArr = photosArr.map(photo => {
            if(photo.id === id) {
                return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        setPhotoArr(updatedArr)
    }

    function RemoveItem(id){
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    function EmptyCart(){
        setCartItems([])
    }
   

    return(
        <context.Provider value={{photosArr,toggleFavorite,AdImageToCart,cartItems,RemoveItem,EmptyCart,preloader,isLoading}}>
          {
            props.children
          }
        </context.Provider>
    )
}


export {context,ContextProvider};