import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import NoteList from './components/NoteList';

function App() {

  const [notes, setNotes] = useState('');

  return (
    <div className="App">
      <NoteList />
    </div>
  );
}

export default App;
