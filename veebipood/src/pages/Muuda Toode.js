import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import tootedFailist from "../Data/Tooted.json";

function MuudaToode() {
  const {jrknr} =useParams();
  const leitud =tootedFailist[jrknr];
  const nimiref = useRef ();
  const hindref = useRef ();
  const piltref = useRef ();
  const aktiivneref = useRef ();
  const navigate = useNavigate ();

  const muuda =() => {
    tootedFailist[jrknr] = {
      "nimi": nimiref.current.value,
      "hind": Number (hindref.current.value),
      "aktiivne": aktiivneref.current.value,
      "pilt": piltref.current.value
    }
    navigate("/halda")

  }
  return (
    <div>
    {leitud !== undefined &&
      <div>
      <label>Toote nimi</label><br />
      <input ref= {nimiref} defaultValue= {leitud.nimi} type ="text" />
      <label>Toote hind</label><br />
      <input ref={hindref} defaultValue= {leitud.hind} type ="number" />
      <label>Toote pilt</label><br />
      <input ref={piltref} defaultValue= {leitud.pilt} type ="text" />
      <label>Toote aktiivsus</label><br />
      <input ref={aktiivneref} defaultChecked= {leitud.aktiivne} type ="checkbox" />
      <button onClick={muuda}>Muuda</button><br />
    </div>}
    {leitud === undefined && <div>Toodet ei leitud</div>}
    </div>
  )
}

export default MuudaToode