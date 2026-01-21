const Libro = ({ libro, handleRimuovi }) => {
    return (
        <div className="card card-border bg-base-100 w-96">
            <div className="card-body">
                <h2 className="card-title">{libro.titolo}</h2>
                <p>di {libro.autore} ({libro.anno_pubblicazione})</p>
                <p>Genere: {libro.genere}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-error" onClick={() => handleRimuovi(libro.id)}>Rimuovi</button>
                </div>
            </div>
        </div>

        // <div key={libro.id}>
        //     <h2>{libro.titolo}</h2>
        //     <p>{libro.autore}</p>
        //     <p>{libro.genere}</p>
        //     <p>{libro.anno_pubblicazione}</p>
        //     <button onClick={() => handleRimuovi(libro.id)}>Rimuovi</button>
        // </div>
    )
}

export default Libro
