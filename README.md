# Progetto TPI - Rest API Libri

L'applicazione si presenta divisa in due componenti principali:
- Frontend scritto in Javascript utilizzando React come framework
- Backend scritto in Python utilizzando la libreria Flask per le richieste HTTP e Faker per generare entry casuali

## Analisi Progetto

### Requisiti Funzionali

- Must have
    - Visualizzazione corretta e chiara dei libri della libreria
    - Possibilità di aggiungere ed eliminare libri propri
- Should have
    - Possibilità di cercare un libro presente nella libreria
    - Possibilità di eliminare facilmente l’intera libreria
- Could have
    - Ridimensionamento degli elementi della pagina in dipendenza alla dimensione della finestra
    - Possibilità di modificare un libro già inserito
- Won’t have
    - Sistema di autenticazione

### Requisiti non Funzionali

- Prestazioni
    - L’inserimento dei libri deve avvenire in tempo reale
    - L’applicazione deve poter gestire più utenti della stessa libreria (max 10)
- Sicurezza
    - L’applicazione deve essere protetta da vulnerabilità informatiche
- Disponibilità
    - I servizi dell’applicazione devono essere disponibili per almeno l’intera giornata lavorativa
- Usabilità
    - L’applicazione deve essere facile ed intuitiva da utilizzare
    - L’interfaccia utente deve essere comprensibile
- Compatibilità
    - L’applicazione deve essere disponibile per tutti i browser desktop

### User Story

- Libreria no-profit
    - Soggetto: gestore di una libreria no-profit
    - Richiesta: Gestisco una libreria no-profit per i senzatetto e voglio un’applicazione in grado di aggiungere ed eliminare facilmente i libri e di visualizzarli chiaramente
- Libreria casalinga
    - Soggetto: casalingo con decisamente troppi libri
    - Richiesta: Sono un casalingo con una ricca collezione di libri e voglio un’applicazione che riesca ad includere e visualizzare una grandissima quantità di libri
- Vendite facili
    - Soggetto: possessore di una libreria privata
    - Richiesta: Posseggo una libreria privata che voglio cercare di vendere il prima possibile e voglio un’applicazione che sia in grado di aggiungere con facilità i libri

---

<a href="https://github.com/SixMax06/rest-api-libri">rest-api-libri</a> © 2026 by <a href="https://github.com/SixMax06">SixMax06</a> is licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>

<img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;"><img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="" style="max-width: 1em;max-height:1em;margin-left: .2em;">
