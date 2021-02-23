import React, { useContext, useEffect, useState } from "react";
import { setLocalStorage } from "../helpers/localStorage";
import { multiStepContext } from "../StepContext";
import "./Secondstep.css";
import axios from "axios";
import { Button } from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { getTemplates } from "../redux/actions/templateActions";
import { Fragment } from "react";
import './thirdstep.css'
import Axios from "axios";
import {Modal} from './Modal'
import { FaYoutubeSquare } from "react-icons/fa";


export default function Thirdstep() {
  
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  

const {checked , setChecked}= useState(false)
  
  const dispatch = useDispatch ();
  const {templates} =useSelector(state => state.templates)

  useEffect(() => {
    
    dispatch (getTemplates())
  }, [dispatch])

  /*const validerstepTow = async (response) => {
    setLocalStorage("processValues", userData);
    const user = await localStorage.getItem("user");
    const userObj = JSON.parse(user);
    const userid = userObj._id;
    console.log(userid);
    //setUserData({ ...userData, userid: userid });
    const obj = { userData, userid };
    console.log(userData);
    try {
      response = await axios.post("/leads", obj);
    } catch (err) {
      console.log("lead api error: ", err);
    }
  };*/
  const [show, setShow] = useState(false);

  const closeModalHandler = () => setShow(false);
  
  const validerstepthree = async (response) => {

      
    setLocalStorage("processValues", userData);

    const user = await localStorage.getItem("user");

    const userObj = JSON.parse(user);
    const userid = userObj._id;
    console.log(userid);
    //setUserData({ ...userData, userid: userid });
    const obj = { userData, userid };

    console.log(userData);
    try {
      response = await Axios.post("/leads", obj);
     
    } catch (err) {
      console.log("lead api error: ", err);
    }
    
  };

  return (


/*
    <div className="container">
   
    <div className="blog__section">
    
    
    
    
  <div className="container__blog" >
 
  <div className="blog__main">
  {templates.map((template)=>(
  
    <div className="row">
    <div className="col-md-12">
      <div className="singleBlog">
     
      
      <Fragment>
      <img
      src={`/uploads/${template.fileName}`} 
        className="iconimg_back"
        alt="icon-pricing"
      />
        <div className="blogContent">

          <h3></h3>
          
          
          <Button className='btn'
          onClick={()=>validerstepthree()}
          >
            Choose Plan
          </Button>
         
        </div>
        
        </Fragment>    
        </div>
      
        </div>
      </div>
      ))}
      
     
      </div>
      </div>
      </div>
     
      </div>
  )}
*/

  /*  <div>
    <div className="container">
    
    <div className="row">
    {templates.map((temp)=>(
      <div className="col-md-3 colonne">
      <form>
      
      
          <input type="radio" name={temp.title} className="input-hidden"   id={temp._id} value={userData['template']} onClick={(e)=>setUserData({...userData, "template" : e.target.name })} />
          <label  for={temp._id} > 
          
          <img
          src={`/uploads/${temp.fileName}`} 
            alt=""
            
          />
          </label>
          </form>
       
      
      
      </div>))}
      </div>
     
      </div>
      <div className="boutton">
      <Button className="btn" onClick={()=>validerstepthree()}>
      submit
      </Button>
      </div>
      </div>
  );
}*/

 <div>
    <div className="container">
    
    <div className="row">
    {templates.map((temp)=>(
      <div className="col-md-3 colonne">
     
      <div className="custom-control custom-radio">
          <input type="radio" name="hello" className="custom-control-input"  id={temp.title} value={userData['template']} onClick={(e)=>setUserData({...userData, "template" : e.target.id })} />
            
          <label className="label_third" htmlFor={temp.title} >
          <img
          src={`/uploads/${temp.fileName}`} 
            
            
          />
          </label>
    
       
      </div>
      
      </div>))}
      </div>
     
      </div>
      <Modal show={show} close={closeModalHandler} />
      <div className="boutton">
      <Button
        onClick={() => setStep(2)}
        buttonStyle="btn--primary1"
        buttonColor="orange"
      >
        Back
      </Button>
      { show ? <div onClick={closeModalHandler} className="back-drop"></div> : null }
      <Button className="btn btn-openModal"  onClick={()=>{validerstepthree();setShow(true)}}>
      submit
      </Button>
      
      </div>
     
      </div>
  )
}