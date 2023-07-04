import React, { useState } from 'react'

function Seaded() {
    const [keel, uuendakeel] = useState("est");

  return (
    <div>
        <button onClick={()=> uuendakeel ("est")}>Eesti keel</button>
        <button onClick={()=> uuendakeel ("eng")}>English</button>
        <button onClick={()=> uuendakeel ("rus")}>Pyccki</button>
        {keel=== "est"&& <div>Leht on eesti keelne</div>}
        {keel=== "eng"&& <div>Page is in english</div>}
        {keel=== "rus"&& <div>Pyccki jazõk</div>}
    </div>
  )
}

export default Seaded