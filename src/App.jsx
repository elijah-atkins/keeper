import React from 'react';
import Footer from './component/Footer';
import Note from './component/Note';
import Header from './component/Header';
import notes from './notes';
import './App.css';

const createNotes = (noteItem) => {
    <Note 
    key={noteItem.key}
    title={noteItem.title}
    content={noteItem.content}
    />
}

function App() {

  return (
    <div className="App">
      <Header />
      {notes.map(createNotes)}
      <Footer />
    </div>
  );
}

export default App;
