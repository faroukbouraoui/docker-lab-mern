import React, { useState,Fragment } from 'react'
import { createTemplate } from '../redux/actions/templateActions';
import Menu from './Menu'
import isEmpty from 'validator/lib/isEmpty';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
import { useSelector, useDispatch } from 'react-redux';
import { clearMessages } from '../redux/actions/messageActions';

const AddTemplate = () => {


    const { loading } = useSelector(state => state.loading);
	const { successMsg, errorMsg } = useSelector(state => state.messages);
	
   

  const dispatch = useDispatch();
  const [clientSideError, setClientSideError] = useState('');
  

  const [templateData, setTemplateData] = useState({
		templateImage: null,
    title: '',
    link:''
   
		
		
  });
  
  const {
		templateImage,
    title,
    link,
  

	} = templateData;


  const handleMessages = evt => {
		dispatch(clearMessages());
		setClientSideError('');
  };
  
  const handleTemplateChange = evt => {
		setTemplateData({
			...templateData,
			[evt.target.name]: evt.target.value,
		});
  };
  
  const handleTemplateImage = evt => {
		console.log(evt.target.files[0]);
		setTemplateData({
			...templateData,
			[evt.target.name]: evt.target.files[0],
		});
  };
  
  const handleTemplateSubmit = evt => {
		evt.preventDefault();

		if (templateImage === null) {
			setClientSideError('Please select an image');
		} else if (
      isEmpty(title) ||
      isEmpty(link)
    
			
		) {
			setClientSideError('Please enter all fields');
		}  else {
			let formData = new FormData();

			formData.append('templateImage', templateImage);
      formData.append('title', title);
      formData.append('link', link)
      
			
		

			dispatch(createTemplate(formData));
			setTemplateData({
				templateImage: null,
        title: '',
        link:'',
      
				
		
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
    <form onSubmit={handleTemplateSubmit}>
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
  name='templateImage'
  onChange={handleTemplateImage}
/>
<label className='custom-file-label'>
  Choose File
</label>
</div>
    
      <div className="form-group row">
        <label className="col-12 col-form-label">Template Title <i className="tip tippy bg-secondary" data-tippy-animation="scale" data-tippy-arrow="true" data-tippy data-original-title="This is placeholder." /></label>
        <div className="col-12">
          <input value={title} name='title' onChange={handleTemplateChange} type="text" className="form-control" placeholder="placeholder" />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-12 col-form-label">Template Link <i className="tip tippy bg-secondary" data-tippy-animation="scale" data-tippy-arrow="true" data-tippy data-original-title="This is placeholder." /></label>
        <div className="col-12">
          <input value={link} name='link' onChange={handleTemplateChange} type="text" className="form-control" placeholder="placeholder" />
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

export default AddTemplate
