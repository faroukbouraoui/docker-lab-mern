import React, { useEffect, useState } from 'react'

import {FaBars, FaTimes} from 'react-icons/fa'
import { Button } from '../../Button'
import './Navbar.css'
import {IconContext} from 'react-icons/lib'
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
  } from 'react-icons/fa';
  import {
    ScrollingProvider,
    useScrollSection,
    Section,
  } from 'react-scroll-section';
import {Link, withRouter} from 'react-router-dom'
import {isAuthenticated} from '../../../helpers/auth'
import { logout } from '../../../helpers/auth';
import PowerSettingsNewSharpIcon from '@material-ui/icons/PowerSettingsNewSharp';

function Navbar({history}) {

const serviceSection = useScrollSection('serviceUser');
const pricingSection = useScrollSection('pricingUser');

  const redirected= ()=>{
    localStorage.setItem('redirected','/process')
  }
  const handleLogout = (evt) => {
    logout(() => {
        history.push('/signin');
    });
};

    const[click,  setClick] = useState(false)
    const[button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () =>
    {
    setClick(false);
    
    }
    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false)

        }else{
            setButton(true)
        }
    }
    useEffect(()=>{
        showButton()
    }, [])
    window.addEventListener('resize', showButton)
    
    return (
        <>
        <IconContext.Provider value={{color: '#07516E' }}>
        <div className="navbar">
        <div className="navbar-hello hello ">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                <img className="logoimg" src="./img/esflogo.png" alt="logo" />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item" >
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}> A propos de nous</Link>
                </li>
                <li className="nav-item" onClick={serviceSection.onClick} selected={serviceSection.selected}>
                <Link to="/" className="nav-links" onClick={closeMobileMenu}> Services</Link>
            </li>
            <li className="nav-item" onClick={pricingSection.onClick} selected={pricingSection.selected} >
            <Link className="nav-links" onClick={closeMobileMenu}> Pricing</Link>
        </li>
        <li className="nav-item">
        <Link to="/" className="nav-links" onClick={closeMobileMenu}> Contact</Link>
        </li>
         <li className="nav-social">
         <Link
         className='social-icon-link'
         to='/'
         target='_blank'
         aria-label='Facebook'
       >
         <FaFacebook />
       </Link>
         </li>
         <li className="nav-social">
         <Link
         className='social-icon-link'
         to='/'
         target='_blank'
         aria-label='Facebook'
       >
         <FaInstagram />
       </Link>
         </li>
         <li className="nav-social">
         <Link
         className='social-icon-link'
         to='/'
         target='_blank'
         aria-label='Facebook'
       >
         <FaYoutube />
       </Link>
         </li>
         <li className="nav-social">
         <Link
         className='social-icon-link'
         to='/'
         target='_blank'
         aria-label='Facebook'
       >
         <FaLinkedin />
       </Link>
         </li>
         
         <li className="nav-btn">
         
         {button && isAuthenticated() && isAuthenticated().role=== 0 ? (
             <Link to='/process' className="btn-link">
                <Button buttonStyle="btn--outline" onClick={redirected} >Start Now</Button>
             </Link>
         ):(
         
             <Link to='/signin' className="btn-link" onClick={closeMobileMenu,redirected}>
                <Button buttonStyle="btn--outline" >Start Now</Button>
             </Link>
         )}
         
         </li>
         
         <li className="nav-btn">
         {button && isAuthenticated() && isAuthenticated().role=== 0  ? (
             <Link to='/signin' onClick={handleLogout}>
                <Button buttonStyle="btn--primary1" buttonColor="primary" ><PowerSettingsNewSharpIcon /></Button>
                </Link>
         ):(
             <Link to="/signin" className="btn-link" onClick={closeMobileMenu}>
                <Button buttonStyle="btn--primary" >Login</Button>
             </Link>
         )}
         </li>
            </ul>
        </div>
        </div>
        </IconContext.Provider>
        </>
    )
}

export default withRouter(Navbar) 
