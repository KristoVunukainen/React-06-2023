import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Ostukorv() {
  const [ostukorv, uuendaOstukorv] = useState (["Coca cola", "Fanta", "Sprite"])

  return (
    <div>
      {ostukorv.map(toode => <div>{toode}</div>)}
      Ostukorv on tühi.
      <Link className='tooteidLisama' to="/">Mine tooteid lisama</Link>
    </div>
  )
}

export default Ostukorv