import React, { useState } from 'react';
import Footer from './component/Footer';
import Note from './component/Note';
import Form from './component/Form'
import Header from './component/Header';
//import notes from './notes';

function App() {

  const [list, setList] = useState( [] )
  const createNotes = (noteItem) => {
    return(
      <Note 
        deleteNote={deleteNote}
        id={noteItem.id}
        key={noteItem.key}
        title={noteItem.title}
        content={noteItem.content}
    />)
  }

  const addNewNote = (note, index) =>{

    const newNote = {
      key: list.length+1,
      id: list.length,
      title: note.title,
      content: note.content
    }
    setList([...list, newNote])
  }

  const deleteNote = (id) => {
    setList(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <Form newNote={ addNewNote }/>
      {list.map(createNotes)}
      <Footer />
    </div>
  );
}

export default App;
