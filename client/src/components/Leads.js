import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getLeads } from '../redux/actions/leadActions';
import Menu from './Menu'

const Leads = () => {


    const dispatch = useDispatch ();
    const {leads} =useSelector(state => state.leads)
    
    useEffect(() => {
      dispatch(getLeads());
      
     }, [dispatch])

    return (
        <div>
            <Menu />
            <div className="page-wrapper">
            {/* Page Title */}
            <div className="page-title">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <h2 className="page-title-text">Clients List :</h2>
                </div>
                
            <table class="table table-striped">
            
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nom Complet</th>
      <th scope="col">Entreprise</th>
      <th scope="col">Numéro téléphone</th>
      <th scope="col">Adresse </th>
      <th scope="col">Email </th>
      <th scope="col">Offre </th>
      <th scope="col">Template </th>
      
      
    </tr>
  </thead>
  
  <tbody>
  {leads.map((lead)=>(
    <tr>
      <th scope="row">#</th>
      <td>{lead.NomComplet}</td>
      <td>{lead.entreprise}</td>
      <td>{lead.numtel}</td>
      <td>{lead.adresse}</td>
      <td>{lead.email}</td>
      <td>{lead.refOffre}</td>
      <td>{lead.refTemplate}</td>
  
   
    </tr>
  ))}
  </tbody>
  
</table>

        </div>
        </div>
        </div>
        </div>
        
    )
}

export default Leads
