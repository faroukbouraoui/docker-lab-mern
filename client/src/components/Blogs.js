import Axios from 'axios'
import React, { Component, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getBlogs } from '../redux/actions/blogActions'
import Menu from './Menu'

 const Blogs = () =>  {

  const dispatch = useDispatch ();
  const {blogs} =useSelector(state => state.blogs)

  useEffect(() => {
    dispatch(getBlogs());
    
   }, [dispatch])
 
        return (
<div>
<Menu />
  <div className="page-wrapper">
    {/* Page Title */}
    <div className="page-title">
      <div className="row align-items-center">
        <div className="col-sm-6">
          <h2 className="page-title-text">Blogs</h2>
        </div>
        
        <div className="col-sm-6 text-right">
          <div className="breadcrumbs">
            <ul>
              <li><a href="#">Home</a></li>
              <li>Faq</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <button className="btn btn-success btn-pill" style={{marginBottom:"10px",marginLeft:"500px"}}><Link to="/add-blog">create blog</Link></button>
    {/* Page Body */}
    
    <div className="page-body" >
      <div className="row">
      {blogs.map((blog)=>(
        <div className="col-12">
          <div className="panel panel-default">
            <div className="panel-head">
              <div className="panel-title">
                <span className="panel-title-text">{blog.title}</span>
                
              </div>
            </div>
            <div className="panel-body">
              <div className="theme-accordion-container">
                <div className="theme-accordion">
                  <div className="theme-accordion-hdr">
                    <h4 className="text-primary"><i className="fa fa-stethoscope" />{blog.author}</h4>
                    <div className="theme-accordion-control"><i className="fa fa-plus" /></div>
                  </div>
                  <div className="theme-accordion-bdy">
                    <div className="row p-3">
                      <div className="col-sm-3 theme-accordian-img text-center">
                        <img className="img-responsive img-thumbnail" src={`/uploads/${blog.fileName}`} alt='imgblog' />
                      </div>
                      <div className="col-sm-9">
                        <p style={{borderBottom:"1px lightgray solid"}} className="paragraph-small paragraph-black">
                          {blog.description}
                         
                        </p>
                        <div className="pull-right">
                          <button style={{marginRight:"5px"}} className="btn btn-outline btn-primary btn-pill btn-outline-1x btn-gradient btn-shadow" onClick={(e) => {this.deleteblog(blog._id, e)}}>Delete</button>
                          <button  className="btn btn-outline btn-primary btn-pill btn-outline-1x btn-gradient btn-shadow"><Link to={"/update-blog/"+blog._id}>Update</Link></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
               
                      </div>
                    </div>
                  </div>
                </div>
                ))}
              </div>
             
            </div>
   
            </div></div>

        )
    }


export default Blogs
