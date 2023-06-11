import React,{useContext} from "react"
import { context } from "../Context"
import Image from "../components/Image"
import {getClass} from "../utils"
import Preload from "../components/Preloader"

function Photos() {

   const {photosArr,preloader }= useContext(context)
   const photos=photosArr.map((item,i)=>(
                    <Image key={item.id} img={item}  className={getClass(i)}/>
                ))
    return (
        <main className="photos">
           {
            preloader===true&&<Preload/>
           }  

           {
            preloader===false&&photos
           }
        </main>
    )
}

export default Photos