import React from 'react'
import { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import isEmpty from 'validator/lib/isEmpty';
import { showLoading } from '../helpers/loading';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { createCategory } from '../redux/actions/categoryActions';
import { clearMessages } from '../redux/actions/messageActions';
import Menu from './Menu';

const AddCategory = () => {


    const { loading } = useSelector(state => state.loading);
	const { successMsg, errorMsg } = useSelector(state => state.messages);
	
   

  const dispatch = useDispatch();
  const [clientSideError, setClientSideError] = useState('');
  

  const [categoryData, setCategoryData] = useState({
		categoryImage: null,
		category: '',
    
    description:'',
		
		
  });
  
  const {
		categoryImage,
		category,
   
    description,

	} = categoryData;


  const handleMessages = evt => {
		dispatch(clearMessages());
		setClientSideError('');
  };
  
  const handleCategoryChange = evt => {
		setCategoryData({
			...categoryData,
			[evt.target.name]: evt.target.value,
		});
  };
  
  const handleCategoryImage = evt => {
		console.log(evt.target.files[0]);
		setCategoryData({
			...categoryData,
			[evt.target.name]: evt.target.files[0],
		});
  };
  
  const handleCategorySubmit = evt => {
		evt.preventDefault();

		if (categoryImage === null) {
			setClientSideError('Please select an image');
		} else if (
			isEmpty(category) ||
      isEmpty(description)
     
			
		) {
			setClientSideError('Please enter all fields');
		}  else {
			let formData = new FormData();

			formData.append('categoryImage', categoryImage);
			formData.append('category', category);
      formData.append('description', description);
    
			
		

			dispatch(createCategory(formData));
			setCategoryData({
				categoryImage: null,
				category: '',
        description: '',
      
				
		
			});
		}
	};



    return (
        <div>
        <Menu />
        <div className="page-wrapper" onClick={handleMessages}>
        <div className="page-title">
        <div className="page-body">
        <div className="row">
        <div className="col-12">
        <div className="panel panel-default">
<div className="panel">
  <div className="panel-head">
    <h5 className="panel-title">Add Blog</h5>
  </div>
  <div className="panel-body">
    <form onSubmit={handleCategorySubmit}>
    {clientSideError && showErrorMsg(clientSideError)}
    {errorMsg && showErrorMsg(errorMsg)}
    {successMsg && showSuccessMsg(successMsg)}

    {loading ? (
      <div className='text-center'>
        {showLoading()}
      </div>
    ) : (
  <Fragment>
<div className='custom-file mb-2'>
<input
  type='file'
  className='custom-file-input'
  name='categoryImage'
  onChange={handleCategoryImage}
/>
<label className='custom-file-label'>
  Choose File
</label>
</div>
    
      <div className="form-group row">
        <label className="col-12 col-form-label">Blog Title <i className="tip tippy bg-secondary" data-tippy-animation="scale" data-tippy-arrow="true" data-tippy data-original-title="This is placeholder." /></label>
        <div className="col-12">
          <input value={category} name='category' onChange={handleCategoryChange} type="text" className="form-control" placeholder="placeholder" />
        </div>
      </div>

      <div className="form-group row">
        <label className="col-12 col-form-label">Blog description <i className="tip tippy bg-success" data-tippy-animation="scale" data-tippy-arrow="true" data-tippy data-original-title="This is textarea." /></label>
        <div className="col-sm-12" >
          <textarea  value={description} name='description' onChange={handleCategoryChange} className="form-control" rows={5} placeholder="Description"/>
        </div>
      </div>
  </Fragment>
  )}

  <div className="panel-footer text-right">
  <button type="submit" className="btn btn-success mr-2"  >Submit</button>
  <button type="reset" className="btn btn-outline btn-secondary btn-outline-1x">Cancel</button>
</div>
    </form>
  </div>

</div>
</div>
</div>
</div>
</div>
</div>
</div>
        
        </div>
    )
}

export default AddCategory
