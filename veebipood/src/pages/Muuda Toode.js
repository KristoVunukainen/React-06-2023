import React from 'react'
import { useParams } from 'react-router-dom'
import tootedFailist from "../Data/Tooted.json";

function MuudaToode() {
  const {jrknr} =useParams();
  const leitud =tootedFailist[jrknr];
  return (
    <div>
      <label>Toote nimi</label><br />
      <input defaultValue= {leitud} type ="text" />
      <button>Muuda</button><br />
    </div>
  )
}

export default MuudaToode