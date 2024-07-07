import React,{useContext} from "react";
import {AlertContext} from '../Context/AlertContext'

const Alert = (props) => {
  const alertContext=useContext(AlertContext)
  const {alert,ShowAlert}=alertContext
  return (
    <div>
      <div className="alert alert-primary" role="alert">
       {alert.msg}
      </div>
    </div>
  );
};

export default Alert;
