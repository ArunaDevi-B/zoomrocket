import React from 'react'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from '../Home/Home';
import PersistentDrawerRight from '../Home/PersistentDrawerRight';

const Router = () => {
  
  return (
<BrowserRouter>
<Routes>
    <Route exact path ="/" element={<Home />}  />
    <Route exact path ="/addstaff" element={<PersistentDrawerRight />}  />

</Routes>
</BrowserRouter>  )
}
 
export default Router