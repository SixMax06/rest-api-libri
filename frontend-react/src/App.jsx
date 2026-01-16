import { useState } from 'react'
import './App.css'

const rest_api_url = "http://localhost:11000/api/libri"
let data = await fetch(rest_api_url)
data = await data.json()

function App() {
  const [titolo, setTitolo] = useState('')
  const [autore, setAutore] = useState('')
  const [genere, setGenere] = useState('')
  const [annoPubblicazione, setAnnoPubblicazione] = useState('')

  console.log(data)

  return (
    <>
      {/*Form di input*/}
      <form>
        <input type="text" placeholder='Titolo' value={titolo} onChange={(event) => setTitolo(event.target.value)}/>
        <input type="text" placeholder='Autore' value={autore} onChange={(event) => setAutore(event.target.value)}/>
        <input type="text" placeholder='Genere' value={genere} onChange={(event) => setGenere(event.target.value)}/>
        <input type="text" placeholder='Anno di pubblicazione' value={annoPubblicazione} onChange={(event) => setAnnoPubblicazione(event.target.value)}/>
        <button type="submit">Cerca</button>
        <button type="submit">Aggiungi</button>
      </form>
      <div></div>
    </>
  )
}

export default App
