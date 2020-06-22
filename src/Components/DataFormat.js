import React, {Component} from 'react';
import data from '../data';
import './dataformat.css';
import { render } from '@testing-library/react';


class DataFormat extends Component{
  constructor(props){
    super(props);

    this.state = {

      person: data[0],
      personID: 0
    }
    
  } 

componentDidMount(){
    this.setState({person: data[`${this.state.personID}`]})
  
}


handleIncrement = () => {
  this.setState({personID: this.state.personID +1})
}

handleDecrement = () => {
  
  this.setState({personID: this.state.personID -1})
}


  render(){
    const {id, name, city, country, employer, title, favoriteMovies} = this.state.person
  return(
    <div>
    <h2 className='id'> {id}/25</h2>
    <section>
      
  <h2 className='name'> {name.first} {name.last}</h2>

    <p className='from'>From: {city}, {country} </p>

  <p className='title'>Job Title: {title}</p>

  <p className='Employer'>Employer: {employer}</p>
    
    

    <p className='fav-movies-key'>Favorite Movies:</p>
    <ol>
    <li >{favoriteMovies[0]}</li>
    <li >{favoriteMovies[1]} </li>
    <li >{favoriteMovies[2]} </li>
    </ol>
    </section>
    </div>
  )
}
}  

export default DataFormat


