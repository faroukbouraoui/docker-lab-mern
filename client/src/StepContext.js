import React, { useState } from 'react'
import GlobalProcess from './components/GlobalProcess'

export const multiStepContext = React.createContext()
 const StepContext = () =>{
     const [currentStep, setStep] = useState(1)
     const [userData, setUserData] = useState([])
     const [finalData, setFinalData] = useState([])

     function submitData(){

     }
    return (
        <div>
            <multiStepContext.Provider value={{currentStep, setStep, userData, setUserData, finalData, setFinalData, submitData}}>
                <GlobalProcess />
            </multiStepContext.Provider>
        </div>
    )
}

export default StepContext
