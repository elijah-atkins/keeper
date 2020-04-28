import React, { useState } from 'react';
import Footer from './component/Footer';
import Note from './component/Note';
import Form from './component/Form'
import Header from './component/Header';
//import notes from './notes';

function App() {

  const [list, setList] = useState( [] );

  const addNewNote = (note) =>{

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
      {list.map((noteItem, index) => {
    return(
      <Note 
        deleteNote={deleteNote}
        id={index}
        key={index}
        title={noteItem.title}
        content={noteItem.content}
    />)
  })}
      <Footer />
    </div>
  );
}

export default App;
