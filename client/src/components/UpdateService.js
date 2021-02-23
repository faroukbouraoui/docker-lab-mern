import Axios from 'axios';
import React, { Component } from 'react'
import Menu from './Menu';

export class UpdateService extends Component {

  constructor(props){
    super(props)
    this.onChangeServiceName = this.onChangeServiceName.bind(this);
   
    this.onChangeServiceDescription = this.onChangeServiceDescription.bind(this);
    this.onSubmit=this.onSubmit.bind(this);

this.state={
    name:'',
    description:''

  }
}
componentDidMount(){
  Axios.get('http://localhost:4000/services/update/'+ this.props.match.params.id).then(res =>{
    this.setState({
      name:res.data.name,
      description:res.data.description
    })
  }).catch((error)=>{
    console.log(error)
  })
}

  onSubmit(e){
    e.preventDefault()

    const serviceobj = {
        name:this.state.name,
        
        description:this.state.description,
    }
    Axios.patch(`http://localhost:4000/services/update/`+this.props.match.params.id, serviceobj).then((res)=>{
        console.log(res.data)
        console.log('service successfully updated')
    }).catch((error)=>{
        console.log(error)
    })
    this.props.history.push('/services')
}
onChangeServiceDescription(e){
  this.setState({description: e.target.value})
}
onChangeServiceName(e){
  this.setState({name: e.target.value})
}

    render() {
        return (
            
            <div>
            <Menu />
            <div className="page-wrapper">
            <div className="page-title">
            <div className="page-body">
            <div className="row">
            <div className="col-12">
            <div className="panel panel-default">
    <div className="panel">
      <div className="panel-head">
        <h5 className="panel-title">Tip Sytle form</h5>
      </div>
      <div className="panel-body">
        <form>
          <div className="row">
  
  
          </div>
          <div className="form-group row">
            <label className="col-12 col-form-label">Service name <i className="tip tippy bg-secondary" data-tippy-animation="scale" data-tippy-arrow="true" data-tippy data-original-title="This is placeholder." /></label>
            <div className="col-12">
              <input value={this.state.name} onChange={this.onChangeServiceName} type="text" className="form-control" placeholder="placeholder" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-12 col-form-label">Service description <i className="tip tippy bg-success" data-tippy-animation="scale" data-tippy-arrow="true" data-tippy data-original-title="This is textarea." /></label>
            <div className="col-12">
              <textarea value={this.state.description} onChange={this.onChangeServiceDescription} className="form-control" rows={5} placeholder="Description" />
            </div>
          </div>
    
        </form>
      </div>
      <div className="panel-footer text-right">
        <button type="reset" className="btn btn-success mr-2" onClick={this.onSubmit}>Update</button>
        <button type="reset" className="btn btn-outline btn-secondary btn-outline-1x">Cancel</button>
      </div>
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
}

export default UpdateService
