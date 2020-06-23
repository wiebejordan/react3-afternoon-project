import React, {Component} from "react";
import './databuttons.css';


class ExtraButtons extends Component{
  constructor(){
    super();
    
  }


render(){
  return (
    <div id='blue-buttons' >
    <button>Edit</button>
    <button>Delete</button>
    <button>New</button>
    </div>
  )
}




}


export default ExtraButtons;