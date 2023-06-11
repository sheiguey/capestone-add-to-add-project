import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import App from "./App";
import Cart from "./pages/Cart";
import Header from "./components/Header";
 

const AppRoute =()=>{
    return(
        <BrowserRouter>
          <Header/>
            <Routes>
                <Route  exact path="/"  element={<App/>} />
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </BrowserRouter>
       
    )
}

export default AppRoute