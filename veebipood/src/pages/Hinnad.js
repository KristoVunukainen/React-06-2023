import React, { useState } from 'react'

function Hinnad() {
const[hinnad, uuendaHinnad] = useState([23,42,10,99,14,15, 10]);
const reset =() => {
    uuendaHinnad ([23,42,10,99,14,15, 10])
}

const hinnadKasvavalt =() => {
   hinnad.sort ((a, b) => a - b)
   uuendaHinnad (hinnad.slice());
}
const hinnadKahanevalt =() => {
    hinnad.sort ((b, a) => a - b)
    uuendaHinnad (hinnad.slice());
}
const filtreeriSuuremadKui20 = () => {
    const filtreeritudHinnad = hinnad.filter (hind => hind>20)
    uuendaHinnad (filtreeritudHinnad)

}

const filtreeiVäiksemadKui50 = () => {
    const filtreeritudHinnad = hinnad.filter (hind => hind<50)
    uuendaHinnad (filtreeritudHinnad)
}

const arvutaKokku =() => {
    let summa =0;
    hinnad.forEach (hind => summa = summa + hind);
    return summa;
}

  return (
    <div>
        <button onClick={hinnadKasvavalt}>Hind kasvavalt</button>
        <button onClick={hinnadKahanevalt}>Hind kahanevalt</button>
        <button onClick={filtreeriSuuremadKui20}>Jäta alles suuremad kui 20</button>
        <button onClick={filtreeiVäiksemadKui50}>Jäta alles väiksemad kui 50</button>
        <button onClick={reset}>Reset</button>
        {hinnad.map((hind, index) => <div key={index}>{hind} $</div>)}
        <div> Kokku: {arvutaKokku()} $</div>
    </div>
  )
}

export default Hinnad