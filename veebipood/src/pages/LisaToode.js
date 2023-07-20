
import React, { useRef, useState } from 'react'
import tootedFailist from "../Data/Tooted.json"
import { ToastContainer, toast } from 'react-toastify';

function LisaToode() {
const [sonum, uuendaSonum] = useState();
const inputiLuger = useRef();
const hindref = useRef();
const piltref = useRef();
const aktiivref = useRef();
const lisa = ()=> {
  if (inputiLuger.current.value ==="") {
    uuendaSonum ("Tühja nimetusega toodet ei saa lisada!")
    toast.success(" Tühja nimetusega toodet ei saa lisada!");

  } else {
    uuendaSonum("Toode lisatud: " + inputiLuger.current.value )
    tootedFailist.push ({
      "nimi": inputiLuger.current.value,
       "hind": Number (hindref.current.value),
       "pilt": piltref.current.value});
    toast.success("Edukalt " + inputiLuger.current.value +  " lisatud!");
    inputiLuger.current.value =""
    hindref.current.value="";
    piltref.current.value="";
    aktiivref.current.value="";
  }

  
}

  return (
    <div>
      <div>{sonum}</div>
      <label>Toote nimi</label> <br />
      <input ref={inputiLuger} type="text" /> <br />
      <label>Toote hind</label> <br />
      <input ref={hindref} type="text" /> <br />
      <label>Toote pilt</label> <br />
      <input ref={piltref} type="text" /> <br />
      <label>Toote aktiivsus</label> <br />
      <input ref={aktiivref} type="text" /> <br />
      <button onClick={lisa}>Lisa</button><br />
              <ToastContainer
        position='bottom-right'
        autoClose={4000}
        theme={localStorage.getItem("teema") === "tume" ? "light" : "dark"}
         />
    </div>
  )
}

export default LisaToode


  // [] - useState võrdusmärgist vasakul pool, esimene on muutuja, teine on millega teda muuta
  // {} - JS-s koodiblokk, HTML-s dünaamika tekitaja
  // () - funktsioonide väljakutsumiseks   if () <--- if'i tingimuse lugemiseks
  // =  - väärtuse andmiseks
  // === - võrdluseks kas vasak ja parem pool on identsed
  // >  <   >=   - numbrite võrdlemiseks suurem / väiksem / suurem-võrdne
  // &&  -   kui vasakul pool on tõde, siis näita
  // ;  - rea lõpetamiseks
  // ! - keera vastupidiseks     !true ---> false
  // tumesinine - sissekirjutatud tüüp
  // roheline - võõras klass
  // helesinine - muutuja omadused
  // oranž - jutumärkides väärtus
  // kollane - funktsioon, taaskasutatav koodiblokk, lõppeb enamustel juhtudel sulgudega
  // tavaline sinine - muutuja, millel on muutuv väärtus
  // lilla - import, from, export, if, else, return - sissekirjutatud funktsionaalsus