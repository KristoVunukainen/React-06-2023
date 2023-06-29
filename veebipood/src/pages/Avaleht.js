// Simple React Snippets
//rfce

import React, { useState } from "react";

function Avaleht() {
  const [kogus, uuendaKogus] = useState(0);
  const [laigitud, uuendaLaigitud] = useState(false);
  const [sonum, uuendaSonum] = useState ("Uuenda kogust!");

  function nulli (){
    uuendaKogus(0);
    uuendaSonum ("Panid koguse nulli!");
  }
  function vahenda (){
    uuendaKogus(kogus -1);
    uuendaSonum ("Vähendasid kogust!");
  }
  function suurenda (){
    uuendaKogus(kogus +1);
    uuendaSonum ("Suurendasid kogust!");
  }

  return (
    <div>
      {laigitud === true && <img src="/laigitud.svg" alt="" />}
      {laigitud === false && <img src="/mitte laigitud.svg" alt="" />}
      {laigitud}
      <button onClick={() => uuendaLaigitud (!laigitud)}>muuda like-i</button>
      {/* <button onClick={() => uuendaLaigitud(true)}>Muuda laigituks</button> */}
      {/* <button onClick={() => uuendaLaigitud(false)}>Muuda mitte laigituks</button> */}
      <br />
      <br />
       <div>{sonum}</div>
      {kogus > 0 && (<button onClick={nulli} >Tagasi nulli</button>)}
      <button disabled ={kogus ===0} onClick={() => vahenda(kogus - 1)}>-</button>
      {kogus}
      <button onClick={() => suurenda(kogus + 1)}>+</button>
    </div>
  );
}

export default Avaleht;
