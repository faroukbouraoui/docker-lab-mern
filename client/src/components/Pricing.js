import React, { useEffect } from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import { getOffres } from '../redux/actions/offreActions';
import { useDispatch, useSelector } from 'react-redux';
import { isAuthenticated } from '../helpers/auth';

function Pricing() {


  const dispatch = useDispatch ();
  const {offres} =useSelector(state => state.offres)
  
  
  
  useEffect(() => {
   dispatch(getOffres());
   
  }, [dispatch])

  return (
    <IconContext.Provider value={{ color: '#07516E', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>L'offre qui convient a vos besoins !</h1>
          <p className="pricing__description">Une plateforme unifiée, dotée de toutes les fonctionnalités e-commerce et de point de vente qu'il vous faut pour créer, gérer et développer votre activité.</p>
          <div className="row">
          <div className='pricing__container'>
          
         
          {offres.map((offre)=>(
            <div className="col-3">
          
            <div  className='pricing__container-card'>
                
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                <img
                src={`/uploads/${offre.filename}`} 
                  className=""
                  alt=""
                />
                <h2>{offre.name}<br/> {offre.price} <sup>dt</sup><span>/mois</span> </h2>
               
                
                
                </div>
                <ul className='pricing__container-features'>
                {offre.servicesOffre.map((s) =>(
                  <li>{s.serviceName}</li>
                ))}
                </ul>
                {isAuthenticated() && isAuthenticated().role=== 0 ?(
                  <Link to='/process'>
                    <button className="pricing__btn">
                    Choose Plan
                    </button>
                  </Link>
                  ):(
                    <Link to='/signin'>
                    <button className="pricing__btn">
                    Choose Plan
                    </button>
                  </Link>
                  )}
              </div>
              
            </div>
          
            </div>
            ))}
            
            </div>
            
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;