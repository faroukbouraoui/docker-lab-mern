import  Menu  from './Menu'
import React from 'react'

function Home() {
    return (

  <div>
  <Menu />
    <div className="page-wrapper">
      {/* Page Title */}
      <div className="page-title">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <h2 className="page-title-text">Howdy, John!</h2>
          </div>
          <div className="col-sm-6 text-right">
            <div className="breadcrumbs">
              <ul>
                <li><a href="#">Home</a></li>
                <li>Dashboard</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Page Body */}
      <div className="page-body">
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="dashboard-stat color-success">
              <div className="content"><h4>523</h4> <span>Users</span></div>
              <div className="icon"><i className="icon-people" /></div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="dashboard-stat color-warning">
              <div className="content"><h4>111</h4> <span>Projects</span></div>
              <div className="icon"><i className="icon-layers" /></div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="dashboard-stat color-primary">
              <div className="content"><h4>$12K</h4> <span>Income</span></div>
              <div className="icon"><i className="icon-docs" /></div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="dashboard-stat color-danger">
              <div className="content"><h4>$523</h4> <span>Expenses</span></div>
              <div className="icon"><i className="icon-credit-card" /></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="panel panel-default">
              <div className="box-title p-3">Income/Expense</div> 
              <div className="panel-wrapper">
                <ul className="chart-tag">
                  <li><span style={{background: '#3483FF'}} /> Income</li>
                  <li><span style={{background: '#ffc107'}} /> Expense</li>
                </ul>
                <div className="chart-container">
                  <div id="morris-area-chart2" style={{height: 321}} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="panel panel-default">
              <div className="box-title p-3">Invoice By Status</div> 
              <div className="panel-body">
                <ul className="chart-tag">
                  <li><span style={{background: '#98aafb'}} /> Paid</li>
                  <li><span style={{background: '#ccc5a8'}} /> Unpaid</li>
                  <li><span style={{background: '#52bacc'}} /> Other</li>
                </ul>
                <div id="morris-donut-invoice-by-status" style={{height: 289}} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="panel panel-default">
              <div className="row widget-separator-1">
                <div className="col-md-4">
                  <div className="widget-1">
                    <div className="content">
                      <div className="row align-items-center">
                        <div className="col">
                          <h5 className="title">Total Revenue</h5>
                          <span className="descr">Awerage Weekly Profit</span>
                        </div>
                        <div className="col text-right">
                          <div className="number text-primary">+$12900</div>
                        </div>
                      </div>
                    </div>
                    <div className="content">
                      <div className="row align-items-center">
                        <div className="col">
                          <h5 className="title">Total Tax</h5>
                          <span className="descr">Awerage Weekly Profit</span>
                        </div>
                        <div className="col text-right">
                          <div className="number text-danger">+$2900</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="widget-2">
                    <div className="box-title pb-3 pt-3">Order Statatics</div>
                    <div className="row content align-items-end">
                      <div className="col">
                        <div className="number">$12000</div>
                        <div className="count text-primary">(490 Sales)</div>
                        <div className="month">April</div>
                      </div>
                      <div className="col">
                        <div id="sparkline-bar1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row p-3">
                    <div className="col-12 box-title pb-3 pt-3">Expenses</div>
                    <div className="col-md-5">
                      <div className="widget-10 d-inline-block">
                        <div className="bullet"><span className="bg-primary" /></div> 
                        <div className="value">Health</div> 
                      </div>
                      <div className="widget-10 d-inline-block">
                        <div className="bullet"><span className="bg-warning" /></div> 
                        <div className="value">Automobiles</div> 
                      </div>
                      <div className="widget-10 d-inline-block">
                        <div className="bullet"><span className="bg-danger" /></div> 
                        <div className="value">Internet</div> 
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div id="morris-donutchart-2" style={{height: 150}} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
        <div className="row">
          <div className="col-12">
            <div className="panel panel-default">
              <div className="row widget-separator-1 m-0">
                <div className="col-md-4">
                  <div className="widget-1">
                    <div className="content">
                      <div className="row align-items-center">
                        <div className="col">
                          <h5 className="title">Total Sales</h5>
                          <span className="descr">Monthly</span>
                        </div>
                        <div className="col text-right">
                          <div className="number text-success">+$22900</div>
                        </div>
                      </div>
                    </div>
                    <div className="content">
                      <div className="row align-items-center">
                        <div className="col">
                          <h5 className="title">Delivery Charges</h5>
                          <span className="descr">Monthly</span>
                        </div>
                        <div className="col text-right">
                          <div className="number text-warning">+$2900</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="widget-1">
                    <div className="content">
                      <div className="row align-items-center">
                        <div className="col">
                          <h5 className="title">Orders</h5>
                          <span className="descr">Weekly Orders</span>
                        </div>
                        <div className="col text-right">
                          <div className="number text-secondary">+1,450</div>
                        </div>
                      </div>
                    </div>
                    <div className="content">
                      <div className="row align-items-center">
                        <div className="col">
                          <h5 className="title">Support Tickets</h5>
                          <span className="descr">Average per User</span>
                        </div>
                        <div className="col text-right">
                          <div className="number text-danger">+90</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="widget-1">
                    <div className="content">
                      <div className="row align-items-center">
                        <div className="col">
                          <h5 className="title">Expenses</h5>
                          <span className="descr">Monthly Expenses</span>
                        </div>
                        <div className="col text-right">
                          <div className="number text-success">+$12900</div>
                        </div>
                      </div>
                    </div>
                    <div className="content">
                      <div className="row align-items-center">
                        <div className="col">
                          <h5 className="title">Logistics</h5>
                          <span className="descr">Overall</span>
                        </div>
                        <div className="col text-right">
                          <div className="number text-warning">-10%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="panel panel-default">
              <div className="panel-head">
                <div className="panel-title">
                  <div className="panel-title-text">Invoices</div>
                </div>
              </div>
              <div className="panel-body">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Office Manager</td>
                        <td>$ 400.00</td>
                        <td><span className="badge badge-success badge-sm badge-pill">Paid</span></td>
                        <td><i className="far fa-clock mr-2 text-muted" /> 24 March 2018</td>
                        <td>
                          <a href="#" className="tippy d-inline-block" data-tippy-animation="perspective" data-tippy-arrow="true" title="Edit"><i className="icon-pencil mr-2 text-info" /></a>
                          <a href="#" className="tippy d-inline-block" data-tippy-animation="perspective" data-tippy-arrow="true" title="Delete"><i className="icon-trash text-danger" /></a>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Apez Template</td>
                        <td>$ 1400.00</td>
                        <td><span className="badge badge-warning badge-sm badge-pill">Unpaid</span></td>
                        <td><i className="far fa-clock mr-2 text-muted" /> 23 March 2018</td>
                        <td>
                          <a href="#" className="tippy d-inline-block" data-tippy-animation="perspective" data-tippy-arrow="true" title="Edit"><i className="icon-pencil mr-2 text-info" /></a>
                          <a href="#" className="tippy d-inline-block" data-tippy-animation="perspective" data-tippy-arrow="true" title="Delete"><i className="icon-trash text-danger" /></a>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Web Development</td>
                        <td>$ 12400.00</td>
                        <td><span className="badge badge-danger badge-sm badge-pill">Unknown</span></td>
                        <td><i className="far fa-clock mr-2 text-muted" /> 22 March 2018</td>
                        <td>
                          <a href="#" className="tippy d-inline-block" data-tippy-animation="perspective" data-tippy-arrow="true" title="Edit"><i className="icon-pencil mr-2 text-info" /></a>
                          <a href="#" className="tippy d-inline-block" data-tippy-animation="perspective" data-tippy-arrow="true" title="Delete"><i className="icon-trash text-danger" /></a>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Web Design</td>
                        <td>$ 1900.00</td>
                        <td><span className="badge badge-primary badge-sm badge-pill">In Process</span></td>
                        <td><i className="far fa-clock mr-2 text-muted" /> 16 March 2018</td>
                        <td>
                          <a href="#" className="tippy d-inline-block" data-tippy-animation="perspective" data-tippy-arrow="true" title="Edit"><i className="icon-pencil mr-2 text-info" /></a>
                          <a href="#" className="tippy d-inline-block" data-tippy-animation="perspective" data-tippy-arrow="true" title="Delete"><i className="icon-trash text-danger" /></a>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Klinikal Theme</td>
                        <td>$ 2100.00</td>
                        <td><span className="badge badge-dark badge-sm badge-pill">Pending</span></td>
                        <td><i className="far fa-clock mr-2 text-muted" /> 11 March 2018</td>
                        <td>
                          <a href="#" className="tippy d-inline-block" data-tippy-animation="perspective" data-tippy-arrow="true" title="Edit"><i className="icon-pencil mr-2 text-info" /></a>
                          <a href="#" className="tippy d-inline-block" data-tippy-animation="perspective" data-tippy-arrow="true" title="Delete"><i className="icon-trash text-danger" /></a>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Klinik Template</td>
                        <td>$ 400.00</td>
                        <td><span className="badge badge-info badge-sm badge-pill">Paid</span></td>
                        <td><i className="far fa-clock mr-2 text-muted" /> 10 March 2018</td>
                        <td>
                          <a href="#" className="tippy d-inline-block" data-tippy-animation="perspective" data-tippy-arrow="true" title="Edit"><i className="icon-pencil mr-2 text-info" /></a>
                          <a href="#" className="tippy d-inline-block" data-tippy-animation="perspective" data-tippy-arrow="true" title="Delete"><i className="icon-trash text-danger" /></a>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Logo Design</td>
                        <td>$ 600.00</td>
                        <td><span className="badge badge-warning badge-sm badge-pill">Partillay Paid</span></td>
                        <td><i className="far fa-clock mr-2 text-muted" /> 10 March 2018</td>
                        <td>
                          <a href="#" className="tippy d-inline-block" data-tippy-animation="perspective" data-tippy-arrow="true" title="Edit"><i className="icon-pencil mr-2 text-info" /></a>
                          <a href="#" className="tippy d-inline-block" data-tippy-animation="perspective" data-tippy-arrow="true" title="Delete"><i className="icon-trash text-danger" /></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="panel panel-default">
              <div className="panel-head">
                <div className="panel-title">
                  <div className="panel-title-text">Recent Activity</div>
                </div>
              </div>
              <div className="panel-wrapper">
                <div className="recent-list">
                  <ul>
                    <li>
                      <div className="main-icon"><i className="icon-star" /></div>
                      <div className="content">
                        <p><strong>Steve Jordon</strong> left a review <span className="badge badge-success badge-pill">5.0</span> on iPhone</p>
                        <div className="row action align-items-center">
                          <div className="col-sm-8">
                            <a href="#"><i className="icon-pencil" /></a>
                            <a href="#"><i className="icon-note" /></a>
                            <a href="#"><i className="icon-trash" /></a>
                          </div>
                          <div className="col-sm-4 text-right">
                            <span className="date">14 Mar 2018</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="main-icon"><i className="main-icon icon-people" /></div>
                      <div className="content">
                        <p><strong>Mellisa bates</strong> commented on Rakesh Moria's article</p>
                        <div className="row action align-items-center">
                          <div className="col-sm-8">
                            <a href="#"><i className="icon-pencil" /></a>
                            <a href="#"><i className="icon-note" /></a>
                            <a href="#"><i className="icon-trash" /></a>
                          </div>
                          <div className="col-sm-4 text-right">
                            <span className="date">12 Mar 2018</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="main-icon"><i className="main-icon icon-star" /></div>
                      <div className="content">
                        <p><strong>Cheri Arya</strong> left a review  <span className="badge badge-danger badge-pill">2.0</span> on themeforest item.</p>
                        <div className="row action align-items-center">
                          <div className="col-sm-8">
                            <a href="#"><i className="icon-pencil" /></a>
                            <a href="#"><i className="icon-note" /></a>
                            <a href="#"><i className="icon-trash" /></a>
                          </div>
                          <div className="col-sm-4 text-right">
                            <span className="date">11 Mar 2018</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="main-icon"><i className="main-icon icon-user" /></div>
                      <div className="content">
                        <p><strong>Jenet Collins</strong> has created account on client portal.</p>
                        <div className="row action align-items-center">
                          <div className="col-sm-8">
                            <a href="#"><i className="icon-pencil" /></a>
                            <a href="#"><i className="icon-note" /></a>
                            <a href="#"><i className="icon-trash" /></a>
                          </div>
                          <div className="col-sm-4 text-right">
                            <span className="date">27 Feb 2018</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="main-icon"><i className="main-icon icon-star" /></div>
                      <div className="content">
                        <p><strong>John Doe</strong> left a review <span className="badge badge-warning badge-pill">3.8</span> on Ticket.</p>
                        <div className="row action align-items-center">
                          <div className="col-sm-8">
                            <a href="#"><i className="icon-pencil" /></a>
                            <a href="#"><i className="icon-note" /></a>
                            <a href="#"><i className="icon-trash" /></a>
                          </div>
                          <div className="col-sm-4 text-right">
                            <span className="date">31 Jan 2018</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="main-icon"><i className="main-icon fa fa-ticket" /></div>
                      <div className="content">
                        <p><strong>Emily Rasberry</strong> created support ticket for customization.</p>
                        <div className="row action align-items-center">
                          <div className="col-sm-8">
                            <a href="#"><i className="icon-pencil" /></a>
                            <a href="#"><i className="icon-note" /></a>
                            <a href="#"><i className="icon-trash" /></a>
                          </div>
                          <div className="col-sm-4 text-right">
                            <span className="date">26 Jan 2018</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="panel panel-default">
              <div className="panel-head">
                <div className="panel-title">
                  <div className="panel-title-text">Support Ticket</div>
                </div>
              </div>
              <div className="panel-body"> 
                <div className="ticket-list">
                  <div className="list">
                    <div className="tbl-cell icon"><i className="bg-success">A</i></div>
                    <div className="tbl-cell content">
                      <h4>Arya Stark <span className="status text-success">Replied</span></h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="tbl-cell date">4 Days ago</div>
                  </div>
                  <div className="list">
                    <div className="tbl-cell icon"><i className="bg-warning">J</i></div>
                    <div className="tbl-cell content">
                      <h4>John Snow <span className="status text-warning">Waiting for Reply</span></h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="tbl-cell date">4 Days ago</div>
                  </div>
                  <div className="list">
                    <div className="tbl-cell icon "><i className="bg-dark">R</i></div>
                    <div className="tbl-cell content">
                      <h4>Robert Baratheon <span className="status text-dark">Closed</span></h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="tbl-cell date">4 Days ago</div>
                  </div>
                  <div className="list">
                    <div className="tbl-cell icon "><i className="bg-secondary">H</i></div>
                    <div className="tbl-cell content">
                      <h4>House Tally <span className="status text-secondary">Unknown</span></h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="tbl-cell date">4 Days ago</div>
                  </div>
                  <div className="list">
                    <div className="tbl-cell icon "><i className="bg-info">K</i></div>
                    <div className="tbl-cell content">
                      <h4>Khal Drogo <span className="status text-info">Replied</span></h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="tbl-cell date">4 Days ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Page Footer */}
    <div className="page-ftr">
      <div>© 2018. Cryptoboard Admin Template by ManasaTheme</div>
    </div>
  
  {/* Sidebar Section */}
  <div className="sidebar sidebar-right">
    <div className="sidebar-close"><i className="icon-close" /></div>
    <div className="content">
      <ul className="nav nav-tabs nav-tabs-line nav-tabs-line-primary">
        <li className="nav-item">
          <a className="nav-link active" href="#sidebar-member" data-toggle="tab">Member</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#sidebar-setting" data-toggle="tab">Settings</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#sidebar-log" data-toggle="tab">Logs</a>
        </li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane active" id="sidebar-member">
          <div className="pl-2 pr-2">
            <div className="box-title pb-3">Premium Member</div>
            <div className="user-list br-bottom-1x pb-4">
              <ul>
                <li>
                  <div className="tbl-cell image">
                    <img src="uploads/team-1.jpg" alt />
                  </div>
                  <div className="tbl-cell content">
                    <a>Steve Soren</a>
                    <p>Lead Developer at Ipos.</p>
                  </div>
                  <div className="tbl-cell follow">
                    <a href="#" className="btn btn-outline btn-info btn-pill btn-outline-1x btn-sm">Follow</a>
                  </div>
                </li>
                <li>
                  <div className="tbl-cell image">
                    <img src="uploads/team-2.jpg" alt />
                  </div>
                  <div className="tbl-cell content">
                    <a>Cheri Aria</a>
                    <p>Photographer and Lead Designer.</p>
                  </div>
                  <div className="tbl-cell follow">
                    <a href="#" className="btn btn-info btn-pill btn-sm">Following</a>
                  </div>
                </li>
                <li>
                  <div className="tbl-cell image">
                    <img src="uploads/team-3.jpg" alt />
                  </div>
                  <div className="tbl-cell content">
                    <a>Daniel Barnes</a>
                    <p>Manager at IT park.</p>
                  </div>
                  <div className="tbl-cell follow">
                    <a href="#" className="btn btn-outline btn-info btn-pill btn-outline-1x btn-sm">Follow</a>
                  </div>
                </li>
                <li>
                  <div className="tbl-cell image">
                    <img src="uploads/team-4.jpg" alt />
                  </div>
                  <div className="tbl-cell content">
                    <a>Janet Collins</a>
                    <p>Developer at atios.</p>
                  </div>
                  <div className="tbl-cell follow">
                    <a href="#" className="btn btn-outline btn-info btn-pill btn-outline-1x btn-sm">Follow</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="box-title pt-3 pb-3">Users</div>
            <div className="user-list">
              <ul>
                <li>
                  <div className="tbl-cell image">
                    <img src="uploads/team-1.jpg" alt />
                  </div>
                  <div className="tbl-cell content">
                    <a>Steve Soren</a>
                    <p>Lead Developer at Ipos.</p>
                  </div>
                </li>
                <li>
                  <div className="tbl-cell image">
                    <img src="uploads/team-2.jpg" alt />
                  </div>
                  <div className="tbl-cell content">
                    <a>Cheri Aria</a>
                    <p>Photographer and Lead Designer.</p>
                  </div>
                </li>
                <li>
                  <div className="tbl-cell image">
                    <img src="uploads/team-3.jpg" alt />
                  </div>
                  <div className="tbl-cell content">
                    <a>Daniel Barnes</a>
                    <p>Manager at IT park.</p>
                  </div>
                </li>
                <li>
                  <div className="tbl-cell image">
                    <img src="uploads/team-4.jpg" alt />
                  </div>
                  <div className="tbl-cell content">
                    <a>Janet Collins</a>
                    <p>Developer at atios.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-pane" id="sidebar-setting">
          <div className="pl-2 pr-2">
            <div className="box-title pb-3">General Setting</div>
            <div className="setting-list">
              <ul>
                <li className="item">
                  <div className="label">Email Notifications</div>
                  <div className="control"><input type="checkbox" defaultChecked className="js-switch" data-color="#13dafe" /></div>
                </li>
                <li className="item">
                  <div className="label">Comment auto Publish</div>
                  <div className="control"><input type="checkbox" className="js-switch" data-color="#13dafe" /></div>
                </li>
                <li className="item">
                  <div className="label">Review Auto Publish</div>
                  <div className="control"><input type="checkbox" defaultChecked className="js-switch" data-color="#13dafe" /></div>
                </li>
                <li className="item">
                  <div className="label">Post Setting</div>
                  <div className="control"><input type="checkbox" className="js-switch" data-color="#13dafe" /></div>
                </li>
                <li className="item">
                  <div className="label">Cron Log</div>
                  <div className="control"><input type="checkbox" className="js-switch" data-color="#13dafe" /></div>
                </li>
                <li className="item">
                  <div className="label">Email Log</div>
                  <div className="control"><input type="checkbox" defaultChecked className="js-switch" data-color="#13dafe" /></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-pane" id="sidebar-log">
          <div className="pl-2 pr-2">
            <div className="box-title pb-3">Server and Application Logs</div>
            <ul className="timeline">
              <li>
                <div className="time"><small>Just Now</small></div>
                <a  target="_blank" className="timeline-container">
                  <div className="arrow" />
                  <div className="description">21 new users registered </div>
                </a>
              </li>
              <li>
                <div className="time"><small>11 mins</small></div>
                <a href target="_blank" className="timeline-container">
                  <div className="arrow" />
                  <div className="description">New invoice generated <span className="badge badge-danger badge-pill badge-sm">Unpaid</span></div>
                </a>
              </li>
              <li>
                <div className="time"><small>15 mins</small></div>
                <a href target="_blank" className="timeline-container">
                  <div className="arrow" />
                  <div className="description">Cron Job Completed</div>
                </a>
              </li>
              <li>
                <div className="time"><small>20 mins</small></div>
                <a href target="_blank" className="timeline-container">
                  <div className="arrow" />
                  <div className="description">Server Restarted <span className="badge badge-success badge-pill badge-sm">Resolved</span></div>
                </a>
              </li>
              <li>
                <div className="time"><small>25 mins</small></div>
                <a href target="_blank" className="timeline-container">
                  <div className="arrow" />
                  <div className="description">New order received</div>
                </a>
              </li>
              <li>
                <div className="time"><small>30 mins</small></div>
                <a href target="_blank" className="timeline-container">
                  <div className="arrow" />
                  <div className="description">New ticket created <span className="badge badge-warning badge-pill badge-sm">High</span></div>
                </a>
              </li>
              <li>
                <div className="time"><small>35 mins</small></div>
                <a href target="_blank" className="timeline-container">
                  <div className="arrow" />
                  <div className="description">Payment Made by client $350.</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>{/* End Sidebar Section */}
</div>


        
    )
}

export default Home
