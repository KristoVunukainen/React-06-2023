import React from 'react'
import { useParams } from 'react-router-dom'
import tootedFailist from "../Data/Tooted.json"

function YksikToode() {
const {index} = useParams();
const leitud = tootedFailist[index] ;

  return (
    <div>
      <div>Toote järjekorranumber: {index}</div>
      <div>Toote nimi: {leitud}</div>
      <div>Toote....:</div>
    </div>
  )
}

export default YksikToode