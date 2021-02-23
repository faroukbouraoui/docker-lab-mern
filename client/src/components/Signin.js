import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { showErrorMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
import { setAuthentication, isAuthenticated } from '../helpers/auth';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import { signin } from '../api/auth';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import "mdbreact/dist/css/mdb.css";
import './Signin.css'
const Signin = () => {
    let history = useHistory();

    useEffect(() => {
        if (isAuthenticated() && isAuthenticated().role === 1) {
            history.push('/admin');
        } else if (isAuthenticated() && isAuthenticated().role === 0) {
            history.push('/');
        }
    }, [history]);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        errorMsg: false,
        loading: false,
    });

    const { email, password, errorMsg, loading } = formData;

    /****************************
     * EVENT HANDLERS
     ***************************/
    const handleChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            errorMsg: '',
        });
    };



    const handleSubmit = (evt) => {
        evt.preventDefault();

        // client-side validation
        if (isEmpty(email) || isEmpty(password)) {
            setFormData({
                ...formData,
                errorMsg: 'All fields are required',
            });
        } else if (!isEmail(email)) {
            setFormData({
                ...formData,
                errorMsg: 'Invalid email',
            });
        } else {
            const { email, password } = formData;
            const data = { email, password };

            setFormData({ ...formData, loading: true });

            signin(data)
                .then((response) => {
                    setAuthentication(response.data.token, response.data.user);

                    if (isAuthenticated() && isAuthenticated().role === 1) {
                        console.log('Redirecting to admin dashboard');
                        history.push('/admin');
                    } else {
                        if(localStorage.getItem('redirected')==null){
                            console.log('Redirecting to user dashboard');
                            history.push('/');
                        }else{
                            history.push('/process')
                        }
                        
                    }
                })
                .catch((err) => {
                    console.log('signin api function error: ', err);
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
    const showSigninForm = () => (
      <div className="signin__form">
      <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form onSubmit={handleSubmit} noValidate>
            <p className="h4 text-center mb-4">Sign in</p>
            <div className="grey-text">
              <MDBInput label="Type your email" icon="envelope" group type="email" value={email} name='email' onChange={handleChange} validate error="wrong"
                success="right" />
              <MDBInput label="Type your password" icon="lock" group type="password" value={password} name='password' onChange={handleChange}  validate />
            </div>
            <div className="text-center">
              <MDBBtn type="submit">Login</MDBBtn>
            </div>
            <p className='text-center' style={{color:"#FF9C1E"}}>
            Have an account? <Link to='/signup' style={{color:"#07516E"}}> Sign Up</Link>
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
        <div className="background__signin">
        <div className='container'>
            <div className='row vh-100'>
            
           
            
                <div className='col-md-5 mx-auto align-self-right'>
                    {errorMsg && showErrorMsg(errorMsg)}
                    {loading && (
                        <div className='text-center pb-4'>{showLoading()}</div>
                    )}
                    {showSigninForm()}
                </div>
            </div>
        </div>
        </div>
    );
};

export default Signin;