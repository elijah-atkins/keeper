import React from 'react';
import Footer from './component/Footer';
import Note from './component/Note';
import Form from './component/Form'
import Header from './component/Header';
import notes from './notes';


const createNotes = (noteItem) => {
    return(<Note 
    key={noteItem.key}
    title={noteItem.title}
    content={noteItem.content}
    />)
}

function App() {

  return (
    <div className="App">
      <Header />
      <Form />
      {notes.map(createNotes)}
      <Footer />
    </div>
  );
}

export default App;
