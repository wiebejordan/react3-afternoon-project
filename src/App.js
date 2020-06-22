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
      <div className='Main'>
        <header>Home</header>

        <div className='body'>
          <div className='card'>
            <DataCard/>
            
          </div>
          <button>Previous</button>
          <button>Next</button>


        </div>

      </div>
    )
  }






}
  
export default App;
