from flask import Flask, request, jsonify
from flask_cors import CORS
from faker import Faker

app = Flask(__name__)
fake = Faker('it-IT')
CORS(app)
data = []

# Genera 30 libri fittizi
libri_generati = 30
for i in range(libri_generati):
    libro = {
        'id': i,
        'titolo': fake.sentence(nb_words=4),
        'autore': fake.name(),
        'genere': fake.word(ext_word_list=['Fantascienza', 'Giallo', 'Romanzo', 'Saggio', 'Fantasy', 'Storico']),
        'anno_pubblicazione': fake.year(),
        'isbn': fake.isbn13()
    }
    
    data.append(libro)

@app.route('/api/libri', methods=['GET'])
def get_libri():
    return jsonify(data)

@app.route('/api/libri', methods=['POST'])
def post_libri():
    if not request.is_json:
        return jsonify({"error": "Formato JSON errato"}), 400
    
    nuovo_libro = request.get_json()
    max_id = max(libro['id'] for libro in data) if data else 0
    
    libro = {
        'id': max_id + 1,
        'titolo': nuovo_libro['titolo'],
        'autore': nuovo_libro['autore'],
        'genere': nuovo_libro['genere'],
        'anno_pubblicazione': nuovo_libro['anno_pubblicazione'],
        'isbn': fake.isbn13()
    }
    
    data.append(libro)
    return jsonify(libro), 201

@app.route('/api/libri', methods=['DELETE'])
def delete_libri():
    data.clear()
    return jsonify({"msg": "Tutti i libri sono stati eliminati"}), 200

@app.route('/api/libri/<int:libro_id>', methods=['DELETE'])
def delete_libro(libro_id):
    global data
    found = False
    for libro in data:
        if libro['id'] == libro_id:
            data.remove(libro)
            found = True
            break
    
    if not found:
        return jsonify({"error": "Libro non trovato"}), 404
        
    return jsonify({"msg": "Libro eliminato"}), 200

app.run("localhost", 11000, debug=True)
