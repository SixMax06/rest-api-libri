const Libro = ({ libro, handleRimuovi }) => {
    return (
        <div key={libro.id}>
            <h2>{libro.titolo}</h2>
            <p>{libro.autore}</p>
            <p>{libro.genere}</p>
            <p>{libro.anno_pubblicazione}</p>
            <button onClick={() => handleRimuovi(libro.id)}>Rimuovi</button>
        </div>
    )
}

export default Libro
