import React from "react";
import Header from "../header";
import {Route, Routes} from "react-router-dom";
import {CartPage, HomePage} from "../pages";

const App = () => {
    return (
        <div className="container">
            <Header numItems={5} total={210}/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
            </Routes>
        </div>

    );
}

export default App;
