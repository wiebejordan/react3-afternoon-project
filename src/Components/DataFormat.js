import React, {Component} from 'react';
import data from '../data';
import './dataformat.css';

function DataCard(){
  let dataKey = Object.keys(data[0])
  let dataVal = Object.values(data[0])
  let movieString = dataVal[6].join(', ')
  
  return(
    <div>
    <h2 className='id'> {dataVal[0]}/25</h2>
    <section>
      
    <h2 className='name'> {dataVal[1]}</h2>

    <p className='from'>From: {dataVal[2]}, {dataVal[3]} </p>

    <p className='title'>Job Title: {dataVal[5]}</p>

    <p className='Employer'>Employer: {dataVal[4]}</p>
    
    

    <p className='fav-movies-key'>{dataKey[6]}:</p>
    <ol>
    <li >{data[0].favoriteMovies[0]} </li>
    <li >{data[0].favoriteMovies[1]} </li>
    <li >{data[0].favoriteMovies[2]} </li>
    </ol>
    </section>
    </div>
  )
}
  

export default DataCard


