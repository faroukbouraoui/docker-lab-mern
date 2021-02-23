import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getCategories } from '../redux/actions/categoryActions';
import Menu from './Menu'
const AdminCategory = () => {
    const dispatch = useDispatch();
    const {categories} =useSelector(state => state.categories)
    useEffect(() => {
    
        dispatch(getCategories())
        
    }, [dispatch]);
    return (
        <div>
        <Menu />
        <div className="page-wrapper">
  {/* Page Title */}
  <div className="page-title">
  <div className="row align-items-center">
    <div className="col-sm-6">
    <button className="btn btn-primary btn-pill btn-sm"><Link to="/add-category">create service</Link></button>
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
  {categories &&
    categories.map((c)=>(    
  <div class="card" style={{width: "50%","marginTop":"3%"}} >
  <img class="card-img-top" src={`/uploads/${c.fileName}`} alt="Card image cap" style={{width:"100px",marginLeft:"37%",paddingTop:"11px"}}/>
  <div class="card-body">
    <h5 class="card-title">{c.category}</h5>
    <p class="card-text">{c.description}</p>
    <hr />
    <button className="btn btn-warning btn-pill btn-sm"><Link to="/"/*{"/updateservice/"+service._id}*/>Update</Link></button>
    <button className="btn btn-danger btn-pill btn-sm" /*onClick={(e) => {this.deleteService (service._id, e)}}*/>Delete</button>
  </div>
</div>
))}  
      </div>
      </div>
      </div>
    
    )
}

export default AdminCategory
