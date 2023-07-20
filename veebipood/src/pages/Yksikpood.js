import React from 'react'
//import poedFailist from "../data/poed.json" 
import { useParams } from 'react-router-dom';
import poedFailist from "../Data/Poed.json"

function YksikPood() {
    const {ükspood} = useParams(); //Reacti hookid: useState, useRef, useParams
  //  const leitud = poedFailist[yksPood];
  const leitud = poedFailist.find(pood => pood.nimetus.toLocaleLowerCase().replaceAll(" ", ".")===ükspood); 
  

  return (
    <div>
       {leitud !== undefined &&
        <div>
        <div>Poe nimi: {leitud.nimetus} </div>
        <div>Poe lahtiolekuaeg: {leitud.aeg} </div>
        <div>Poe telefoninumber: {leitud.tel} </div>
        </div>}
        {leitud === undefined && <div>Poodi ei leitud</div>}
    </div>
  )
}

export default YksikPood