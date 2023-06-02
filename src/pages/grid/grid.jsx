import React from "react";
import "./css/grid.css";


import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import QueryBar from "../../components/QueryBar"

const Grid = ()=>{
  return (
    <div className="container-grid">
      <div className="item-grid gr1"></div>
      <div className="item-grid gr2"></div>
      <div className="item-grid gr3"></div>
      <div className="item-grid gr7 "></div>
      <div className="item-grid gr6"></div>
      <div className="item-grid gr1"></div>
       <div className="item-grid gr2"></div> 
        <div className="item-grid gr3"></div>
         <div className="item-grid gr4"></div>
       <div className="item-grid gr5"></div>
       <div className="item-grid gr6"></div>
       <div className="item-grid gr1"></div>
       <div className="item-grid gr5"></div>
       <div className="item-grid gr4"></div>
       <div className="item-grid gr5"></div>
       <div className="item-grid gr6"></div>
      
       
    </div>
  );
};
export default Grid;