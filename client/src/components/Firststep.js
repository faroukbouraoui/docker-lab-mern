import React, { useContext } from "react";
import { multiStepContext } from "../StepContext";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Button } from "./Button";
import * as yup from "yup";
import "./FirstStep.css";

import { setLocalStorage } from "../helpers/localStorage";

const formSchema = yup.object().shape({
  nomComplett: yup.string().required("Nom Complet is required"),
  entreprise: yup.string().required("Entreprise is required"),
  telephone: yup.number().required('numéro de téléphone is required')
    .min(8, "Numéro de téléphone must be at least 8 chiffres"),
   
  email: yup.string().email("Email is invalid").required("Email is required"),
  adresse: yup.string().required("Adresse is required"),
  
});
export default function Firststep() {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  const validerstepone = () => {
    setLocalStorage("processValues", userData);
    setStep(2);
  };
  

  return (
    <>
      <Formik
        initialValues={{
          nomComplett: "",
          entreprise: "",
          telephone: "",
          email: "",
          adresse: "",
         
        }}
        validationSchema={formSchema}
        
      >
  
          <Form className="formone">
            <div className="form-group">
              <Field
                name="nomComplet"
                value={userData["nomComplet"]}
                onChange={(e) =>
                  setUserData({ ...userData, nomComplet: e.target.value })
                }
                placeholder="Nom Complet *"
                type="text"
                className="form-control"
                 
                
              />
              
             <ErrorMessage name="nomComplett" />
          
            </div>
            <div className="form-group">
              <Field
                name="entreprise"
                value={userData["entreprise"]}
                onChange={(e) =>
                  setUserData({ ...userData, entreprise: e.target.value })
                }
                placeholder="entreprise *"
                type="text"
                className=
                  "form-control" 
               
              />
             

            </div>
            <div className="form-group">
              <Field
                name="telephone"
                value={userData["telephone"]}
                onChange={(e) =>
                  setUserData({ ...userData, telephone: e.target.value })
                }
                placeholder="telephone *"
                type="text"
                className=
                  "form-control" 
                  
                
              />
              
            </div>
            <div className="form-group">
              <Field
                name="email"
                value={userData["email"]}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
                placeholder="email *"
                type="text"
                className=
                  "form-control" 
                  
                
              />

            </div>
            <div className="form-group">
              <Field
                name="adresse"
                value={userData["adresse"]}
                onChange={(e) =>
                  setUserData({ ...userData, adresse: e.target.value })
                }
                placeholder="adresse *"
                type="text"
                className=
                  "form-control" 
                
              />
         
            </div>

     
           

            <div className="form-group">
            
              <Button
                type="submit"
                onClick={validerstepone}
               
                
                
              >
                Suivant
              </Button>
            </div>
          </Form>
        
      </Formik>
    </>
  );

              }
