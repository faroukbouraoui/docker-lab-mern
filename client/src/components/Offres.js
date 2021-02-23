import Axios from 'axios'
import React, { Component, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getOffres } from '../redux/actions/offreActions'
import Menu from './Menu'

const Offres = ()=>  {
  const dispatch = useDispatch ();
  const {offres} =useSelector(state => state.offres)
  
  useEffect(() => {
    dispatch(getOffres());
    
   }, [dispatch])

        return (
<div>
<Menu />
<div className="wrapper">
  <div className="page-wrapper">
    {/* Page Title */}
    <div className="page-title">
      <div className="row align-items-center">
        <div className="col-sm-6">
        <button className="btn btn-success btn-pill"><Link to="/add-offre">create offre</Link></button>
        </div>
        <div className="col-sm-6 text-right">
          <div className="breadcrumbs">
            <ul>
              <li><a href="#">Home</a></li>
              <li>Dashboard</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    
    <div className="page-body">
    
      <div className="row">
      {offres.map((offre,key)=>(
        <div className="col-md-4">
        
          <div className="pricing01">
          
            <div className="pricing-title">
            
              <div className="icon_pricing">
              <img
              src={`/uploads/${offre.fileName}`} 
              className="iconimg_back"
              alt="icon-pricing"
            />
              </div>
              <h2>{offre.name}</h2>
              <small>{offre.description}</small>
            </div>
            <div className="pricing-box">
              <span className="sup">$</span><span className="price">{offre.price}</span><span className="unit">Per Month</span>
            </div>
            
            <div className="pricing-body">
              <ul>
              <h3 style={{color: "red"}}>Services</h3>
              {offre.servicesOffre.map((s) =>(
                <li>{s.serviceName}</li>
              ))}
              </ul>
            </div>
           
            <div className="pricing-footer">
              <button className="btn btn-primary btn-pill" style={{marginRight:"5px"}}>Update</button>
              <button className="btn btn-primary btn-pill">Delete</button>
            </div>
            
          </div>
          
        </div>
        ))}
      </div>
      
    </div></div></div></div>

        )
    }


export default Offres
