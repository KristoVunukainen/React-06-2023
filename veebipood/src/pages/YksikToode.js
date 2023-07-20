import React from 'react'
import { useParams } from 'react-router-dom'
import tootedFailist from "../Data/Tooted.json"

function YksikToode() {
const {index} = useParams();
const leitud = tootedFailist[index] ;

  return (
    <div> 
    {leitud !== undefined &&
      <>
      <div>Toote järjekorranumber: {index}</div>
      <div>Toote nimi: {leitud.nimi}</div>
      <div>Toote hind: {leitud.hind}</div>
      <div>Toote pilt: <img className='pilt' src={leitud.pilt} alt="" /> </div>
      </>}
      {leitud === undefined && <div>Toodet ei leitud</div>}
    </div>
  )
}

export default YksikToode