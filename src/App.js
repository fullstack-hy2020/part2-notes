import Note from './components/Note'

const App = ({ notes }) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        <ul>
          {notes.map(note => 
            <Note key={note.id} note={note} />
          )}
        </ul>
      </ul>
    </div>
  )
}

export default App
