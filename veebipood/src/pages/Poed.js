import React, { useState } from 'react'
import poedFailist from "..//Data/Poed.json";
import { Link } from 'react-router-dom';

function Poed() {
    const [poed, uuendaPoed] = useState(poedFailist);

    const reset =() => {
        uuendaPoed (poedFailist);
    }

    const sorteeriAZ =()=> {
        poed.sort ((a,b) => a.nimetus.localeCompare (b.nimetus, "et"));
        uuendaPoed (poed.slice());
    }

    const sorteeriZA =()=> {
        poed.sort ((a,b) => b.nimetus.localeCompare (a.nimetus, "et"));
        uuendaPoed (poed.slice());
    }

    const sorteeriTahedKasv =()=> {
        poed.sort ((a,b) => a.nimetus.lenght - b.nimetus.lenght);
        uuendaPoed (poed.slice());
    }

    const sorteeriTahedKah =()=> {
        poed.sort ((a,b) => b.nimetus.lenght - a.nimetus.lenght);
        uuendaPoed (poed.slice());
    }

    const sorteeriKolmasTaht =()=> {
        poed.sort ((a,b) => a.nimetus[2].localeCompare (b.nimetus[2], "et"));
        uuendaPoed (poed.slice());
    }

        const filtreeriEgaLoppevad =()=> {
           const uuedPoed = poed.filter (ykspood => ykspood.nimetus.endsWith("e"));
           uuendaPoed (uuedPoed)

        }

        const filtreeriSisaldabIsLühendit =()=> {
            const uuedPoed = poed.filter (ykspood => ykspood.nimetus.includes("is"));
            uuendaPoed (uuedPoed)
            
        }
        const filtreeriPikkus9 =()=> {
            const uuedPoed = poed.filter (ykspood => ykspood.nimetus.length ===9);
            uuendaPoed (uuedPoed)
            
        }

        const filtreerivähemalt7Tähte =()=> {
            const uuedPoed = poed.filter (ykspood => ykspood.nimetus.length >=7);
            uuendaPoed (uuedPoed)
            
        }

        const filtreeriKolmasTäht =()=>{
            const uuedPoed = poed.filter (ykspood => ykspood.nimetus[2] ==="i");
            uuendaPoed (uuedPoed)

        }
        const arvutaTahedKokku =() => {
            let summa = 0;
            poed.forEach (ükspood => summa = summa + ükspood.nimetus.length );
            return summa ;

        }
        
    
  return (
    <div>
        <div>{arvutaTahedKokku()}</div>
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
    {poed.map (ükspood => <div key={ükspood.nimetus}>{ükspood.nimetus.toLocaleLowerCase().replaceAll(" ", ".") +""}
    <Link to={"/poed/" + ükspood.nimetus}>
              <button>Vaata detailsemalt</button>
            </Link>
    
    </div>)}


    </div>
    
  )
}

export default Poed