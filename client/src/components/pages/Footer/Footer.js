import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';

import { MdFingerprint } from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription' >
      <div className="hero-image">
        <div className="hero-text">
        <p className='footer-subscription-heading'>
        Subscribe to our newsletter and receive 
        </p>
        <p className='footer-subscription-text'>
        exclusive offers every week.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Entre your email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
        </div>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            <img className="logoimg" src="./img/esflogo.png" alt="logo" />
            </Link>
            <p className="text-footer">House My Brand designs clothing for the young, the old &<br></br> everyone in between – but most importantly, for the fashionable</p>
          </div>
         
          <div className='footer-link-items'>
            <Link to="" className="nav-footer">A propos de nous </Link>
            <Link to='/sign-up' className="sous-nav-footer">How it works</Link>
            <Link to='/'  className="sous-nav-footer">Mission</Link>
            <Link to='/'  className="sous-nav-footer">Team</Link>
            <Link to='/'  className="sous-nav-footer">Partenaires</Link>
          </div>
          <div className='footer-link-items'>
          <Link to="" className="nav-footer">Services</Link>
            <Link to='/'  className="sous-nav-footer">Avantage</Link>
            <Link to='/'  className="sous-nav-footer">Process</Link>
            
          </div>
       
        
          <div className='footer-link-items'>
          <Link to="" className="nav-footer">Pricing</Link>
          </div>
          <div className='footer-link-items'>
          <Link to="" className="nav-footer">Blog</Link>
            <Link to='/'  className="sous-nav-footer">Faq</Link>
            <Link to='/'  className="sous-nav-footer">Articles</Link>

          </div>
          <div className='footer-link-items'>
          <Link to="" className="nav-footer">Contact</Link>
          <Link to='/'  className="sous-nav-footer">store@mail.com</Link>
          <Link to='/'  className="sous-nav-footer">+216 555555</Link>
          <Link to='/'  className="sous-nav-footer">B.P. 743 - 2078 Nasr Tunisie</Link>
          </div>
        </div>
        
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          
          <small className='website-rights'></small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
