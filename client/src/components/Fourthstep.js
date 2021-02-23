import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getServices } from '../redux/actions/serviceActions';
import { setLocalStorage } from "../helpers/localStorage";
import { multiStepContext } from "../StepContext";
import './Fourthstep.scss'
import { Button } from './Button';
import Axios from 'axios';
const Fourthstep = () => {

  const { setStep, userData, setUserData, submitData } = useContext(
    multiStepContext
  );
    const dispatch = useDispatch ();
    const {services} =useSelector(state => state.services)
  
    useEffect(() => {
      
      dispatch (getServices())
    }, [dispatch])

    const validerstepFour = async (response) => {

      
      setLocalStorage("processValues", userData);
  
      const user = await localStorage.getItem("user");
  
      const userObj = JSON.parse(user);
      const userid = userObj._id;
      console.log(userid);
      //setUserData({ ...userData, userid: userid });
      const obj = { userData, userid };
  
      console.log(userData);
      try {
        response = await Axios.post("/leads", obj);
      } catch (err) {
        console.log("lead api error: ", err);
      }
    };
    
    return (
        <div>
        <div>
        <h2>Services supplémentaires</h2>
        {services.map((service)=>(
        <div class="group">
          <input type="checkbox" name="cb" id={service._id} />
          <label for={service._id}>{service.serviceName}</label>
          </div>
          ))}
          </div>
          <Button className='btn'
          onClick={()=>validerstepFour()}
          >
            Suivant
          </Button>
          </div>
    )
}

export default Fourthstep
