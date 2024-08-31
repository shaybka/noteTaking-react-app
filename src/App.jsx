import React, { useState } from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Addnew from "./pages/addnew";


const App = () => {
  const[notes,setnotes]=useState([]);
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home notes={notes} setnotes={setnotes}/>}/>
        <Route path="/addnew" element={<Addnew notes={notes} setnotes={setnotes}/>}/>
        
      </Routes>
    </>
  );
};

export default App;
