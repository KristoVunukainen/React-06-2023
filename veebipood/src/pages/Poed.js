import React, { useState } from 'react'
import poedFailist from "..//Data/Poed.json";

function Poed() {
    const [poed, uuendaPoed] = useState(poedFailist);

    const reset =() => {
        uuendaPoed (poedFailist);
    }

    const sorteeriAZ =()=> {
        poed.sort ((a,b) => a.localeCompare (b, "et"));
        uuendaPoed (poed.slice());
    }

    const sorteeriZA =()=> {
        poed.sort ((a,b) => b.localeCompare (a, "et"));
        uuendaPoed (poed.slice());
    }

    const sorteeriTahedKasv =()=> {
        poed.sort ((a,b) => a.lenght - b.lenght);
        uuendaPoed (poed.slice());
    }

    const sorteeriTahedKah =()=> {
        poed.sort ((a,b) => b.lenght - a.lenght);
        uuendaPoed (poed.slice());
    }

    const sorteeriKolmasTaht =()=> {
        poed.sort ((a,b) => a[2].localeCompare (b[2], "et"));
        uuendaPoed (poed.slice());
    }

        const filtreeriEgaLoppevad =()=> {
           const uuedPoed = poed.filter (ykspood => ykspood.endsWith("e"));
           uuendaPoed (uuedPoed)

        }

        const filtreeriSisaldabIsLühendit =()=> {
            const uuedPoed = poed.filter (ykspood => ykspood.includes("is"));
            uuendaPoed (uuedPoed)
            
        }
        const filtreeriPikkus9 =()=> {
            const uuedPoed = poed.filter (ykspood => ykspood.length ===9);
            uuendaPoed (uuedPoed)
            
        }

        const filtreerivähemalt7Tähte =()=> {
            const uuedPoed = poed.filter (ykspood => ykspood.length >=7);
            uuendaPoed (uuedPoed)
            
        }

        const filtreeriKolmasTäht =()=>{
            const uuedPoed = poed.filter (ykspood => ykspood[2] ==="i");
            uuendaPoed (uuedPoed)

        }
        
    
  return (
    <div>
        <button onClick={reset}>Reset</button>
        <div>Kokku:{poed.length} tk </div>
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={sorteeriTahedKasv}>Sorteeri tähtede arv kasvavalt</button>
        <button onClick={sorteeriTahedKah}>Sorteeri tähtede arv kahanevalt</button>
        <button onClick={sorteeriKolmasTaht}>Sorteeri kolmanda tähe järgi A-Z</button>

    <br /><br />
    <button onClick={filtreeriEgaLoppevad}>Jäta alles e ga lõppevad</button>
    <button onClick={filtreeriSisaldabIsLühendit}>Jäta alles kes sisaldavad is lühendit</button>
    <button onClick={filtreeriPikkus9}>Jäta alles kellel pikkus on 9 tähemärki</button>
    <button onClick={filtreerivähemalt7Tähte}>Jäta alles kellel pikkus on 7 tähemärki</button>
    <button onClick={filtreeriKolmasTäht}>Jäta alles kellel kolmas täht on i</button>
    {poed.map (ükspood => <div key={ükspood}>{ükspood}</div>)}

    </div>
    
  )
}

export default Poed