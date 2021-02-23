import Axios from 'axios'
import React, { Component } from 'react'
import Menu from './Menu'

export class Contact extends Component {
state={
    contacts:[
        {
            prenom:'',
            nom:'',
            email:'',
            demande:''
        }
    ]
}

componentDidMount(){
    Axios.get("http://localhost:4000/contact/readall").then(res =>{
        const contacts = res.data
        this.setState({contacts})
    })
}
    render(){
    return (
  <div>
  <Menu />
 <div className="page-wrapper">
 {/* Page Title */}
 <div className="page-title">
   <div className="row align-items-center">
     <div className="col-sm-6">
       <h2 className="page-title-text">Contact List</h2>
     </div>
     
     <div className="col-sm-6 text-right">
       <div className="breadcrumbs">
         <ul>
           <li><a href="#">Home</a></li>
           <li>contact list</li>
         </ul>
       </div>
     </div>
   </div>
 </div>
 
  <div className="page-body" >
    <div className="row">
      <div className="col-md-12">
        <div className="panel">
          <div className="panel-head">
            
          </div>
          <div className="panel-body">
           
            <table className="table">
              <thead>
                <tr>
                  
                  <th>Prénom</th>
                  <th>Nom</th>
                  <th>Email</th>
                  <th>Demande</th>
                </tr>
              </thead>
              {this.state.contacts.map((contact,key)=>(
              <tbody key={key}>
                <tr>
                  <td>{contact.prenom}</td>
                  <td>{contact.nom}</td>
                  <td>{contact.email}</td>
                  <td>{contact.demande}</td>
                  
                </tr>
                
              </tbody>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  </div></div></div>

    )
}}

export default Contact
