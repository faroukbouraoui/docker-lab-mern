import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { getTemplates } from '../redux/actions/templateActions';
import Menu from './Menu'

const Tempteles = () => {

  const dispatch = useDispatch ();
  const {templates} =useSelector(state => state.templates)

  useEffect(() => {
    dispatch(getTemplates());
    
   }, [dispatch])


    return (
        <div>
        <Menu />
        <div className="page-wrapper">
        {/* Page Title */}
        <div className="page-title">
        <div className="row align-items-center">
        <div className="col-sm-6">
        <h2 className="page-title-text">Templates</h2>
      </div>
          <div className="col-sm-6">
          <button className="btn btn-primary btn-pill btn-sm" ><Link to='/Add-template'>create Template</Link></button>
          </div>
         
        </div>
        </div>
 <div className="container">
        <div className="row">
        
        {templates.map((t)=>(
          <div className='col-md-4'>
		<div className='card' style={{marginBottom:"3%"}}>
			<a href='#!'>
				<img
					className='img-fluid w-100'
					src={`/uploads/${t.fileName}`} 
					alt='template'
				/>
			</a>

			<div className='card-body text-center'>
        <h5>{t.title}</h5>
				<hr />
				
			
				<button
					type='button'
					className='btn btn-secondary btn-sm mr-1 my-1'
				>
					<i className='far fa-edit pr-1'></i>
					Edit
				</button>
				<button type='button' className='btn btn-danger btn-sm'>
					<i className='far fa-trash-alt pr-1'></i>
					Delete
				</button>
			</div>
    </div>
    
    </div>
    ))}
    </div>
    </div>
    </div>
    </div>
    )
}

export default Tempteles
