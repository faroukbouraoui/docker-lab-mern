
import Axios from 'axios'
import React, { useState,Fragment } from 'react'
import { createBlog } from '../redux/actions/blogActions';
import Menu from './Menu'
import isEmpty from 'validator/lib/isEmpty';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
import { useSelector, useDispatch } from 'react-redux';
import { clearMessages } from '../redux/actions/messageActions';

function AddBlog() {
 

  const { loading } = useSelector(state => state.loading);
	const { successMsg, errorMsg } = useSelector(state => state.messages);
	
   

  const dispatch = useDispatch();
  const [clientSideError, setClientSideError] = useState('');
  

  const [blogData, setBlogData] = useState({
		blogImage: null,
		title: '',
    author: '',
    description:'',
		
		
  });
  
  const {
		blogImage,
		title,
    author,
    description,

	} = blogData;


  const handleMessages = evt => {
		dispatch(clearMessages());
		setClientSideError('');
  };
  
  const handleBlogChange = evt => {
		setBlogData({
			...blogData,
			[evt.target.name]: evt.target.value,
		});
  };
  
  const handleBlogImage = evt => {
		console.log(evt.target.files[0]);
		setBlogData({
			...blogData,
			[evt.target.name]: evt.target.files[0],
		});
  };
  
  const handleBlogSubmit = evt => {
		evt.preventDefault();

		if (blogImage === null) {
			setClientSideError('Please select an image');
		} else if (
			isEmpty(title) ||
      isEmpty(description)||
      isEmpty(author) 
			
		) {
			setClientSideError('Please enter all fields');
		}  else {
			let formData = new FormData();

			formData.append('blogImage', blogImage);
			formData.append('title', title);
      formData.append('description', description);
      formData.append('author', author);
			
		

			dispatch(createBlog(formData));
			setBlogData({
				blogImage: null,
				title: '',
        description: '',
        author:'',
				
		
			});
		}
	};

    
    return(
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
    <form onSubmit={handleBlogSubmit}>
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
  name='blogImage'
  onChange={handleBlogImage}
/>
<label className='custom-file-label'>
  Choose File
</label>
</div>
    
      <div className="form-group row">
        <label className="col-12 col-form-label">Blog Title <i className="tip tippy bg-secondary" data-tippy-animation="scale" data-tippy-arrow="true" data-tippy data-original-title="This is placeholder." /></label>
        <div className="col-12">
          <input value={title} name='title' onChange={handleBlogChange} type="text" className="form-control" placeholder="placeholder" />
        </div>
      </div>
      <div className="form-group row">
      <label className="col-12 col-form-label">Blog author <i className="tip tippy bg-secondary" data-tippy-animation="scale" data-tippy-arrow="true" data-tippy data-original-title="This is placeholder." /></label>
      <div className="col-12">
        <input value={author} name='author' onChange={handleBlogChange} type="text" className="form-control" placeholder="placeholder" />
      </div>
    </div>
      <div className="form-group row">
        <label className="col-12 col-form-label">Blog description <i className="tip tippy bg-success" data-tippy-animation="scale" data-tippy-arrow="true" data-tippy data-original-title="This is textarea." /></label>
        <div className="col-sm-12" >
          <textarea  value={description} name='description' onChange={handleBlogChange} className="form-control" rows={5} placeholder="Description"/>
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


        
    )}


    
export default AddBlog
