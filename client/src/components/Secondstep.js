import React, { useContext, useEffect } from "react";
import { setLocalStorage } from "../helpers/localStorage";
import { multiStepContext } from "../StepContext";

import { Link } from "react-router-dom";
import { Button } from "./Button";
import { getOffres } from "../redux/actions/offreActions";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
import { setOffre } from "../helpers/auth";
import './Pricing.css'
export default function Secondstep () {
  const { setStep, userData, setUserData, submitData } = useContext(
    multiStepContext
  );

  const dispatch = useDispatch ();
  const {offres} =useSelector(state => state.offres)

  useEffect(() => {
    
    dispatch (getOffres())
  }, [dispatch])


  const validerstepTwo = (name) => {
    
    setUserData({ ...userData, offre: name });
    setLocalStorage("processValues", userData);
    setStep(3);
  };
  return (
  <div className="container">
    
   
      <h1 className='pricing__heading'>Créez une boutique et choisissez un forfait</h1>

      <div className="row">
      <div className='pricing__container' style={{marginLeft:"-64px"}}>
     
      {offres.map((offre)=>(
      <div className="col-3">
        <div className='pricing__container-card'>
        
          <div className='pricing__container-cardInfo'>
            <div className='icon'>
            <img
            src={`/uploads/${offre.filename}`} 
              className="iconimg_back"
              alt="icon-pricing"
            />
            <h2>{offre.name}<br/> {offre.price}  <sup>dt</sup><span>/mois</span> </h2>
           
            
            
            </div>
            <ul className='pricing__container-features'>
            {offre.servicesOffre.map((s) =>(
              <li>{s.serviceName}</li>
            ))}
            </ul>
            <button className="pricing__btn"
            onClick={() => validerstepTwo(offre.name)}
            >
              Choisir votre offre
            </button>
          </div>
         
      </div>
      </div>
      ))}
      </div>
      </div>
      <div className="buttons">
      <Button
        onClick={() => setStep(1)}
        buttonStyle="btn--primary1"
        buttonColor="orange"
      >
        Back
      </Button>
      </div>
    </div>
 
        
            
       
   
  );
}
