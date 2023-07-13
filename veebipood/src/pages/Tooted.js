import React, { useState } from 'react'
import tootedFailist from "../Data/Tooted.json"
import ostukorvFailist from "../Data/Ostukorv.json"
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function Tooted() {
const [tooted, uuendaTooted] = useState (tootedFailist);

const lisaOstukorvi =(toode) => { 
  ostukorvFailist.push(toode);
  toast.success("Edukalt ostukorvi lisatud!");

}

  return (
    <div>
      {tooted.map((toode, index) => 
        <div>
          {toode}
          <button onClick={()=> lisaOstukorvi(toode)}>Lisa ostukorvi</button>
          <Link to = {"/toode/" + index}>
          <button>Vaata detailsemalt</button>
          </Link>
        </div>
        )}
        <ToastContainer
        position='bottom-right'
        autoClose={4000}
        theme='dark'
         />
    </div>
  )
}

export default Tooted