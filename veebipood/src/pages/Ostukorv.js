import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ostukorvFailist from "../Data/Ostukorv.json"

function Ostukorv() {
  const [ostukorv, uuendaOstukorv] = useState (ostukorvFailist)

  const tyhjenda = () => {
    ostukorv.splice (0);
    uuendaOstukorv (ostukorv.slice());
  }

  const eemalda =(index) => {
    ostukorv.splice (index,1);
    uuendaOstukorv (ostukorv.slice());

  }

  const lisa =(toode) => {
    ostukorv.push (toode);
    uuendaOstukorv (ostukorv.slice());

    const arvutakogusumma =() => {
      let summa = 0
      ostukorv.forEach(toode=> summa = summa + toode.hind)
      return summa;
    }
    
  }

  return (
    <div>
      {ostukorv.length > 0 &&<button onClick={tyhjenda}>Tühjendan</button>}
      {ostukorv.length > 0 && <div>{ostukorv.length} tk</div>}
      {ostukorv.map((toode, index) =>
       <div key= {index}>
        {toode.nimi} - {toode.hind} $
      <button onClick={() => eemalda (index)}>x</button>
      <button onClick={()=> lisa (toode)}>+</button>
      </div>)}
      {ostukorv.length === 0 &&
      <div>
      Ostukorv on tühi.
      <Link className='tooteidLisama' to="/tooted">Mine tooteid lisama</Link>
      </div>}
      {ostukorv.length > 0 && <div> Kokku: { arvutakogusumma ()} $ </div>}

    </div>
  )
}

export default Ostukorv