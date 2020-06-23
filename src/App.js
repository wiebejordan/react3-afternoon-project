import React, { Component } from 'react';
import DataFormat from './Components/DataFormat';
import ExtraButtons from './Components/DataButtons';
import data from './data';
import './App.css';




class App extends Component{
  constructor(props){
    super(props);

    this.state = {

      person: data[0],
      personID: 0
  }
  this.getPerson = this.getPerson.bind(this)
}

getPerson = () => {
  this.setState({person: data[`${this.state.personID}`]})
}


componentDidMount(){
  this.getPerson();

}
stopIncrement = () => {
  if(this.state.personID === 25){
    this.setState({personID: 24})
  }
}


handleIncrement = () => {
  if(this.state.personID > -1){
this.setState({personID: this.state.personID += 1});
  this.getPerson();}
  else if(this.state.personID <= 24){
    this.setState({personID: 24})
  }
  console.log('hit')
}

handleDecrement = () => {
  if(this.state.personID !== -1){
this.setState({personID: this.state.personID -1})
this.getPerson();
  }
}

  

  render(){
    return(
      <div>
        <div className='main'>
        <header>
          <h3 className='Home'>Home</h3>
        </header>

        <div className='body'>
          <div className='card'>
            <DataFormat person={this.state.person}/>
            
          </div>
          <div className='Buttons'>
          
          <button onClick={this.handleDecrement}>{'<'} Previous</button>
          
            <  ExtraButtons id='blue-buttons'/>
          
          <button onClick={this.handleIncrement}>Next {'>'}</button>
          
          
          </div>
          


        </div>
        </div>
      </div>
    )
  }





  
}
  
export default App;
