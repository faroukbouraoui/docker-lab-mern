import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { logout } from '../helpers/auth';



function Menu ({history})  {
  const handleLogout = (evt) => {
    logout(() => {
        history.push('/signin');
    });
};
    
        return (
<div>
{/*<div class="loader-wrapper">
<div class="loader spinner-3">
    <div class="bg-primary"></div>
    <div class="bg-primary"></div>
    <div class="bg-primary"></div>
    <div class="bg-primary"></div>
    <div class="bg-primary"></div>
    <div class="bg-primary"></div>
    <div class="bg-primary"></div>
    <div class="bg-primary"></div>
    <div class="bg-primary"></div>
</div>
        </div>*/}
  <div className="wrapper">
    {/* Main Container */}
    <div id="main-wrapper" className="menu-fixed page-hdr-fixed">
      {/* Menu Wrapper */}
      <div className="menu-wrapper">
        <div className="menu">
          {/* Menu Container */}
          <ul>
            
            <li className="has-sub active">
              <a><i className="icon-screen-desktop" /><span>Dashboard</span><i className="arrow rotate" /></a>
              <ul className="sub-menu">
              <li>
              <Link to="/leads"><span>Gestion Des Clients</span></Link>
            </li>
              <li>
              <Link to="/categories"><span>Gestion Des Categories</span></Link>
            </li>
                <li>
                  <Link to='/services'><span>Gestion Services</span></Link>
                </li>
                <li>
                  <Link to="/offres"><span>Gestion Offres</span></Link>
                </li>
                <li>
                  <Link to="/blogs"><span>Gestion Blogs</span></Link>
                </li>
                <li>
                <Link to="/templates"><span>Gestion Templates</span></Link>
              </li>
                <li>
                <Link to="/contact"><span>Gestion Des Contacts</span></Link>
              </li>
    
              </ul>
            </li>
          </ul>
        </div>
      </div>
    <div className="page-hdr">
    <div className="row align-items-center">
      <div className="col-4 col-md-7 page-hdr-left">
        {/* Logo Container */}
        <div id="logo">
          <div className="tbl-cell logo-icon">
            <Link to='/'><img src="/asset/images/logoesf.png" alt="logo"/></Link>
          </div>
          <div className="tbl-cell logo">
            <Link href="#"><img src="asset/images/logoesf.png" /></Link>
          </div>
        </div>
        <div className="page-menu menu-icon">
          <a className="animated menu-close"><i className="far fa-hand-point-left" /></a>
        </div>
        <div className="page-menu page-fullscreen">
          <a><i className="fas fa-expand" /></a>
        </div>

      </div>
      <div className="col-8 col-md-5 page-hdr-right">
        <div className="page-hdr-desktop">
          <div className="page-menu menu-dropdown-wrapper menu-user">
            <a className="user-link">
              
              <span className="tbl-cell avatar"><i className="icon-grid" /></span>
            </a>
            <div className="menu-dropdown menu-dropdown-right menu-dropdown-push-right">
              <div className="arrow arrow-right" /> 
              <div className="menu-dropdown-inner">
                <div className="menu-dropdown-head pb-3">
                  <div className="tbl-cell">
                  
                    {/* <i class="fa fa-user-circle"></i> */}
                  </div>
                  <div className="tbl-cell pl-2 text-left">
                    <p className="m-0 font-18">John Doe</p>
                    <p className="m-0 font-14">Demonstration</p>
                  </div>
                </div>
               
                <div className="menu-dropdown-footer text-right">
                  <Link to='/signin' className="btn btn-outline btn-primary btn-pill btn-outline-2x font-12 btn-sm" onClick={handleLogout} >Logout</Link>
                </div>
              </div>
            </div>
          </div>


          <div className="page-menu">
            <a className="open-sidebar-right"><i className="icon-settings" /><span /></a>
          </div>
        </div>
        <div className="page-hdr-mobile">
          <div className="page-menu open-mobile-search">
            <a href="#"><i className="icon-magnifier" /></a>
          </div>
          <div className="page-menu open-left-menu">
            <a href="#"><i className="icon-menu" /></a>
          </div>
          <div className="page-menu oepn-page-menu-desktop">
            <a href="#"><i className="icon-options-vertical" /></a>
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


export default withRouter(Menu)
