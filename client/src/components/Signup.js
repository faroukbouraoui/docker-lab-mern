import React, { useState, useEffect,useContext } from 'react';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import equals from 'validator/lib/equals';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
import { isAuthenticated } from '../helpers/auth';
import { Link, useHistory } from 'react-router-dom';
import { signup } from '../api/auth';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import "mdbreact/dist/css/mdb.css";
import './Signin.css'





const Signup = () => {

    
    
    let history = useHistory();

    useEffect(() => {
        if (isAuthenticated() && isAuthenticated().role === 1) {
            history.push('/admin/dashboard');
        } else if (isAuthenticated() && isAuthenticated().role === 0) {
            history.push('/user/dashboard');
        }
    }, [history]);

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
        successMsg: false,
        errorMsg: false,
        loading: false,
    });
    const {
        username,
        email,
        password,
        password2,
        successMsg,
        errorMsg,
        loading,
    } = formData;
    /****************************
     * EVENT HANDLERS
     ***************************/
    const handleChange = (evt) => {
        //console.log(evt);
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            successMsg: '',
            errorMsg: '',
        });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        // client-side validation
        if (
            isEmpty(username) ||
            isEmpty(email) ||
            isEmpty(password) ||
            isEmpty(password2)
        ) {
            setFormData({
                ...formData,
                errorMsg: 'All fields are required',
            });
        } else if (!isEmail(email)) {
            setFormData({
                ...formData,
                errorMsg: 'Invalid email',
            });
        } else if (!equals(password, password2)) {
            setFormData({
                ...formData,
                errorMsg: 'Passwords do not match',
            });
        } else {
            const { username, email, password } = formData;
            const data = { username, email, password };

            setFormData({ ...formData, loading: true });
            
            signup(data)
                .then((response) => {
                    console.log('Axios signup success: ', response);
                    console.log('data', data);
                   
                    setFormData({
                        username: '',
                        email: '',
                        password: '',
                        password2: '',
                        loading: false,
                        successMsg: response.data.successMessage,
                    });
                })
                .catch((err) => {
                    console.log('Axios signup error: ', err);
                    setFormData({
                        ...formData,
                        loading: false,
                        errorMsg: err.response.data.errorMessage,
                    });
                });
        }
    };
    

    
    /****************************
     * VIEWS
     ***************************/
    const showSignupForm = () => (
      <div className="signup__form">
      <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form onSubmit={handleSubmit} noValidate>
            <p className="h5 text-center mb-4"><img src="/img/esflogo.png" style={{width:"50px"}}/></p>
            <div className="grey-text">
              <MDBInput label="Your name" name='username' icon="user" group type="text" value={username} onChange={handleChange} validate error="wrong"
                success="right" />
              <MDBInput label="Your email" name='email' icon="envelope" group type="email" value={email} onChange={handleChange} validate error="wrong"
                success="right" />
              <MDBInput label="Your password" name='password' icon="lock" group type="password" value={password} onChange={handleChange} validate
                error="wrong" success="right" />
              <MDBInput label="Confirm your password" name='password2' icon="exclamation-triangle" value={password2} onChange={handleChange} group type="password" validate error="wrong" success="right" />
            </div>
            <div className="text-center">
              <MDBBtn type="submit" color="primary">Register</MDBBtn>
            </div>
            <p className='text-center text-balck'>
            Have an account? <Link to='/signin'>Log In</Link>
        </p>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    );

    /****************************
     * RENDERER
     ***************************/
    return (
        <div className='container'>
            <div className='row px-3 vh-100'>
                <div className='col-md-5 mx-auto align-self-center'>
                    {successMsg && showSuccessMsg(successMsg)}
                    {errorMsg && showErrorMsg(errorMsg)}
                    {loading && (
                        <div className='text-center pb-4'>{showLoading()}</div>
                    )}
                    {showSignupForm()}
                    {/* <p style={{ color: 'white' }}>{JSON.stringify(formData)}</p> */}
                </div>
            </div>
        </div>
    );
};

export default Signup;
