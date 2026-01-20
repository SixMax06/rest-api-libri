import { useEffect, useState } from 'react'
import './App.css'
import Libro from './Libro'

const rest_api_url = "http://localhost:11000/api/libri"

const makeGET_libri = async() => {
  const response = await fetch(rest_api_url)
  const data = await response.json()
  return data
}

const makePOST_libro = async(libro) => {
  const response = await fetch(rest_api_url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(libro)
  })
  await response.json()
  return response
}

const makeDELETE_libro = async(id_libro) => {
  if (id_libro !== undefined) {
    const response = await fetch(rest_api_url + '/' + id_libro, {
      method: 'DELETE'
    })
    await response.json()
    return response
  }
}

function App() {
  const [data, setData] = useState([])
  const [titolo, setTitolo] = useState('')
  const [autore, setAutore] = useState('')
  const [genere, setGenere] = useState('')
  const [annoPubblicazione, setAnnoPubblicazione] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const libri = await makeGET_libri()
      setData(libri)
    }
    fetchData()
  }, [])

  const handleCerca = () => {
    makeGET_libri().then((data) => setData(data.filter((libro) =>
      ((titolo === '' || libro.titolo.toLowerCase().includes(titolo.toLowerCase())) &&
      (autore === '' || libro.autore.toLowerCase().includes(autore.toLowerCase())) &&
      (genere === '' || libro.genere.toLowerCase().includes(genere.toLowerCase())) &&
      (annoPubblicazione === '' || libro.anno_pubblicazione.toString().includes(annoPubblicazione))
    ))))
  }

  const handleAggiungi = () => {
    const nuovoLibro = {
      titolo: titolo,
      autore: autore,
      genere: genere,
      anno_pubblicazione: parseInt(annoPubblicazione)
    }

    makePOST_libro(nuovoLibro).then(() => {
      makeGET_libri().then((data) => setData(data))
    })
  }

  const handleRimuovi = (id_libro) => {
    makeDELETE_libro(id_libro).then(() => {
      makeGET_libri().then((data) => setData(data))
    })
  }

  return (
    <>
      {/*Form di input*/}
      <div>
        <input type="text" placeholder='Titolo' value={titolo} onChange={(event) => setTitolo(event.target.value)}/>
        <input type="text" placeholder='Autore' value={autore} onChange={(event) => setAutore(event.target.value)}/>
        <input type="text" placeholder='Genere' value={genere} onChange={(event) => setGenere(event.target.value)}/>
        <input type="text" placeholder='Anno di pubblicazione' value={annoPubblicazione} onChange={(event) => setAnnoPubblicazione(event.target.value)}/>
        <button type="button" onClick={handleCerca}>Cerca</button>
        <button type="button" onClick={handleAggiungi}>Aggiungi</button>
      </div>

      {/*Elenco libri*/}
      <div>
        {data.map((libro) => (
          <Libro key={libro.id} libro={libro} handleRimuovi={handleRimuovi} />
        ))}
      </div>
    </>
  )
}

export default App
