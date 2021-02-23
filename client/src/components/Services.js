
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import './Services.css'
import { getServices } from '../redux/actions/serviceActions';


const Services = ()=> {

const dispatch = useDispatch ();
const {services} =useSelector(state => state.services)



useEffect(() => {
 dispatch(getServices());
 
}, [dispatch])
  /*deleteService(serviceid)
  {
    if(window.confirm('Are you sure'))
    {
      fetch('/services/delete/'+serviceid,{
        method:'DELETE',
        header:{'Accept':'application/json',
        'Content-Type':'application/json'
      }
      })
    }
  }*/
    
        return (
<div>
<Menu />
<div className="page-wrapper">
  {/* Page Title */}
  <div className="page-title">
  <div className="row align-items-center">
    <div className="col-sm-6">
    <button className="btn btn-primary btn-pill btn-sm"><Link to="/post-service">create service</Link></button>
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
 

  <div className="col-md-8">
  {services.map((service,key)=>(
    <div className="panel panel-default" key={service._id}>
      <div className="panel-head">
        <div className="panel-title">
          <i className=" panel-head-icon text-primary">
          <img
          src={`/uploads/${service.fileName}`} 
          className="iconimg_service"
          alt="icon-pricing"
        /></i>
          <span className="panel-title-text">{service.serviceName}</span>
        </div>
      </div>
      <div className="panel-wrapper">
        <div className="panel-body">
          <p className="text-muted m-0">{service.serviceDesc}</p>
          
        </div>
      </div>
      <div className="panel-footer">
        <div className="row">
         
          <div className="col-md-6 text-right">
           
            <button className="btn btn-warning btn-pill btn-sm"><Link to="/"/*{"/updateservice/"+service._id}*/>Update</Link></button>
            <button className="btn btn-danger btn-pill btn-sm" /*onClick={(e) => {this.deleteService (service._id, e)}}*/>Delete</button>
          </div>
        </div>
      </div>
    </div>
    ))}
  </div>
 
</div>
</div>
</div>
</div>
        )
    }


export default Services
