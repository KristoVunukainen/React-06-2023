import React, { useState } from 'react'

function Seaded() {
    const [keel, uuendakeel] = useState(localStorage.getItem("keel")||"est");

    const uuendakeelEst = () => {
      uuendakeel ("est")
      localStorage.setItem ("keel", "est")
    }

    const uuendakeelEng = () => {
      uuendakeel ("eng")
      localStorage.setItem ("keel", "eng")
    }
    
    const uuendakeelRus = () => {
      uuendakeel ("rus")
      localStorage.setItem ("keel", "rus")
    }

  return (
    <div>
        <button onClick={uuendakeelEst}>Eesti keel</button>
        <button onClick={uuendakeelEng}>English</button>
        <button onClick={uuendakeelRus}>Pyccki</button>
        {keel=== "est"&& <div>Leht on eesti keelne</div>}
        {keel=== "eng"&& <div>Page is in english</div>}
        {keel=== "rus"&& <div>Pyccki jazõk</div>}
    </div>
  )
}

export default Seaded