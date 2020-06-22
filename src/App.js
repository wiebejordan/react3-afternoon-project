import React, { Component } from 'react';
import DataFormat from './Components/DataFormat';
import DataButtons from './Components/DataButtons';
import data from './data';
import './App.css';




class App extends Component{
  constructor(props){
    super(props);

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
            <DataFormat/>
            
          </div>
          <div className='Buttons'>
          <button onClick={this.handleDecrement}>{'<'} Previous</button>
          <button onClick={this.handleIncrement}>Next {'>'}</button>
          </div>
          


        </div>
        </div>
      </div>
    )
  }






}
  
export default App;
