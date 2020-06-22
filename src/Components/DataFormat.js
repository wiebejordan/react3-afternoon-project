import React, {Component} from 'react';
import data from '../data';

function DataCard(){
  let dataKey = Object.keys(data[0])
  let dataVal = Object.values(data[0])
  let movieString = dataVal[6].join(', ')
  
  return(
    <div>
    <p className='id'> {dataVal[0]}/25</p>

    <p className='name'>{dataKey[1]}: {dataVal[1]}</p>

    <p className='city'>{dataKey[2]}: {dataVal[2]}</p>

    <p className='country'>{dataKey[3]}: {dataVal[3]}</p>

    <p className='Employer'>{dataKey[4]}: {dataVal[4]}</p>

    <p className='title'>{dataKey[5]}: {dataVal[5]}</p>

    <p className='fav-movies-key'>{dataKey[6]}:</p>

    <li >{data[0].favoriteMovies[0]} </li>
    <li >{data[0].favoriteMovies[1]} </li>
    <li >{data[0].favoriteMovies[2]} </li>
    
    </div>
  )
}
  

export default DataCard


