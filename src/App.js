import React, { Component } from 'react';
import DataFormat from './Components/DataFormat';
import DataCard from './Components/DataCard';
import data from './data';
import './App.css';




class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      
    }
  }

  render(){
    return(
      <div>
        <div className='main'>
        <header>Home</header>

        <div className='body'>
          <div className='card'>
            <DataCard/>
            
          </div>
          <div className='Buttons'>
          <button>Previous</button>
          <button>Next</button>
          </div>
          


        </div>
        </div>
      </div>
    )
  }






}
  
export default App;
