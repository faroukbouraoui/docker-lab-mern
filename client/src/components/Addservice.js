import Axios from 'axios'
import React, {Fragment ,useEffect,useState } from 'react'
import Menu from './Menu'
import isEmpty from 'validator/lib/isEmpty';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { clearMessages } from '../redux/actions/messageActions';
import { createService } from '../redux/actions/serviceActions';
import { getCategories } from '../redux/actions/categoryActions';


const Addservice =() => {

	const { loading } = useSelector(state => state.loading);
	const { successMsg, errorMsg } = useSelector(state => state.messages);
	const { categories } = useSelector(state => state.categories);
   

  const dispatch = useDispatch();
  const [clientSideError, setClientSideError] = useState('');


  const [serviceData, setServiceData] = useState({
		serviceImage: null,
		serviceName: '',
		serviceDesc: '',
		serviceCategory: '',
		
  });
  
  const {
		serviceImage,
		serviceName,
		serviceDesc,
		serviceCategory,

	} = serviceData;


  const handleMessages = evt => {
		dispatch(clearMessages());
		setClientSideError('');
  };
  
  const handleServiceChange = evt => {
		setServiceData({
			...serviceData,
			[evt.target.name]: evt.target.value,
		});
  };
  
  const handleServiceImage = evt => {
		console.log(evt.target.files[0]);
		setServiceData({
			...serviceData,
			[evt.target.name]: evt.target.files[0],
		});
	};

	useEffect(() => {
		dispatch(getCategories());
	}, [dispatch]);

	const handleServiceSubmit = evt => {
		evt.preventDefault();

	/*	if (serviceImage === null) {
			setClientSideError('Please select an image');
		}  */if (
			isEmpty(serviceName)
		
			
		) {
			setClientSideError('Please enter all fields');
		} else if (isEmpty(serviceCategory)) {
			setClientSideError('Please select a category');
		} else {
			let formData = new FormData();

			formData.append('serviceImage', serviceImage);
			formData.append('serviceName', serviceName);
			formData.append('serviceDesc', serviceDesc);
			formData.append('serviceCategory', serviceCategory);
		

			dispatch(createService(formData));
			setServiceData({
				serviceImage: null,
				serviceName: '',
				serviceDesc: '',
			
				serviceCategory: '',
		
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
      <h5 className="panel-title">Add Service</h5>
    </div>
    <div className="panel-body">
      <form >
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
        name='serviceImage'
        onChange={handleServiceImage}
      />
      <label className='custom-file-label'>
        Choose File
      </label>
    </div>
        <div className="form-group row">
          <label className="col-12 col-form-label">Service name <i className="tip tippy bg-secondary" data-tippy-animation="scale" data-tippy-arrow="true" data-tippy data-original-title="This is placeholder." /></label>
          <div className="col-12">
            <input name="serviceName" onChange={handleServiceChange} value={serviceName} type="text" className="form-control" placeholder="placeholder" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-12 col-form-label">Service description <i className="tip tippy bg-success" data-tippy-animation="scale" data-tippy-arrow="true" data-tippy data-original-title="This is textarea." /></label>
          <div className="col-12">
            <textarea value={serviceDesc} name='serviceDesc' onChange={handleServiceChange} className="form-control" rows={5} defaultValue={""} />
          </div>
        </div>
        <div className='form-row'>
        <div className='form-group col-md-12'>
          <label className='text-secondary'>
            Category
          </label>
          <select
            className='custom-select mr-sm-2'
            name='serviceCategory'
            onChange={handleServiceChange}
            
          >
            <option value=''>
              Choose one...
            </option>
            {categories &&
              categories.map(c => (
                <option
                  key={c._id}
                  value={c._id}
                >
                  {c.category}
                </option>
              ))}
          </select>
        </div>
        
        </div>
     
        </Fragment>
        )}
        <div className="panel-footer text-right">
        <button type="submit" className="btn btn-success mr-2" onClick={handleServiceSubmit}>Submit</button>
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


export default Addservice
