// Simple React Snippets
//rfce

import React, { useState } from "react";

function Avaleht() {
  const [kogus, uuendaKogus] = useState(localStorage.getItem("kogus")|| 0);
  const [laigitud, uuendaLaigitud] = useState(JSON.parse (localStorage.getItem("laik")) || false);
  const [sonum, uuendaSonum] = useState ("Uuenda kogust!");

  function nulli (){
    uuendaKogus(0);
    uuendaSonum ("Panid koguse nulli!");
    localStorage.setItem("kogus", 0);

  }
  function vahenda (){
    uuendaKogus(kogus -1);
    uuendaSonum ("Vähendasid kogust!");
    localStorage.setItem("kogus", kogus - 1);
  }
  function suurenda (){
    uuendaKogus(kogus +1);
    uuendaSonum ("Suurendasid kogust!");
    localStorage.setItem("kogus", kogus + 1 );

  }

  const uuendalike =() => {
    uuendaLaigitud(!laigitud);
    localStorage.setItem ("laik", !laigitud);

  }


  return (
    <div>
      {laigitud === true && <img src="/laigitud.svg" alt="" />}
      {laigitud === false && <img src="/mitte laigitud.svg" alt="" />}
      {laigitud}
      <button className="muudalike" onClick={() => uuendalike (!laigitud)}>muuda like-i</button>
      {/* <button onClick={() => uuendaLaigitud(true)}>Muuda laigituks</button> */}
      {/* <button onClick={() => uuendaLaigitud(false)}>Muuda mitte laigituks</button> */}
      <br />
      <br />
       <div>{sonum}</div>
      {kogus > 0 && (<button onClick={nulli} >Tagasi nulli</button>)}
      <button disabled ={kogus ===0} onClick={() => vahenda(kogus - 1)}>-</button>
      <span className={kogus>= 10 &&"kuldne"}>{kogus}</span>
      <button onClick={() => suurenda(kogus + 1)}>+</button>
    </div>
  );
}

export default Avaleht;
