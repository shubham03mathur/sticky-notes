import { useState } from 'react';
import './App.css';
import Notes from './components/Notes';
function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Learn React JS."
    },
    {
      id: 2,
      text: "Learn how to investment."
    }
  ]);

  return (
    <div>
      <Notes notes={notes} setNotes={setNotes}/>
    </div>
  )
}

export default App
