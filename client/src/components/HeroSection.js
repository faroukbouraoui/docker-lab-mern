import React from 'react';
import './HeroSection.css';
import { Button } from './Button';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { isAuthenticated } from '../helpers/auth';

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) {

 const redirected= ()=>{
  localStorage.setItem('redirected','/process')
}



  return (
    <>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading '}>
                Démarez votre commerce en ligne <br/> avec  <span className="hero-span">eStores Factory</span>
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle '
                  }
                >
              Un centre de services mutualisés et une plateforme unifiée de création et de gestion de votre <span className="hero-span">Ecommerce.</span>
                </p>
                <div className="input-areas">
                <input type="text" className="input-domaine" placeholder="Coisissez un nom de domaine" />
                  {isAuthenticated() && isAuthenticated().role=== 0 ?(
                <Link to='/process'>
                  <Button buttonSize='btn--wide' onClick={redirected} buttonColor='orange'>
                  Démarer
                  </Button>
                </Link>
                ):(
                  <Link to='/signin'>
                  <Button buttonSize='btn--wide' onClick={redirected} buttonColor='orange'>
                  Démarer
                  </Button>
                </Link>
                )}
                </div>
                
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src="/img/hero.png" alt={alt} className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}
export default HeroSection;
