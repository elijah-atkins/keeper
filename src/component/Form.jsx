import React, { useState } from 'react';

const Form = () =>{
    const [notes, setNotes] = useState({title: "", content: ""})

    const handleChanges = event => {
        setNotes({...notes, [event.target.title]: event.target.value})
    }

    const submitForm = event =>{
        event.preventDefault();
        //addNewNote(note);
        setNotes({title: "", content: ""})

    }
    return(
        <form className="add-note" onSubmit={submitForm}>

            <input
                id="title"
                type="text"
                placeholder="Title"
                vale={notes.title}
                name="title"
                onChange={handleChanges} />
       
            <textarea
                id="content"
                placeholder="Take a note"
                vale={notes.content}
                name="content"
                onChange={handleChanges} />
                <button>Add</button>
        </form>
    )
}

export default Form;