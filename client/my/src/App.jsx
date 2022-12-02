import React from 'react';
//import { ReactDOM } from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { RestaurantsContextProvider } from './context/RestaurantsContext';
import Home from './routes/Home';
import Restaurantdetailpage from './routes/Restaurantdetailpage';
import UpdatePage from './routes/UpdatePage';
const App=()=>{
    return (
   
<RestaurantsContextProvider>
<div className='container'>
        <Router>
            
                <Routes>
            
            <Route path="/" element={<Home/>}/>
            <Route path="/restaurant/:id" element={<Restaurantdetailpage/>}/>
            <Route path="/restaurant/:id/update" element={<UpdatePage/>}/>
            </Routes>
        </Router>
    </div>
</RestaurantsContextProvider>
    
   
    )   
}

 export  default App;