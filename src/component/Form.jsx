import React, { useState } from 'react';

const Form = ({ newNote }) => {
    const [notes, setNotes] = useState({
        title: "",
        content: ""
    })

    const handleChanges = event => {
        const {name, value} = event.target;
        setNotes({ ...notes, [name]: value })
    }

    const submitForm = event => {
        event.preventDefault();
        newNote(notes)
        setNotes({ title: "", content: "" })
    }
    return (
        <form className="add-note" onSubmit={submitForm}>

            <input
                id="title"
                type="text"
                placeholder="Title"
                value={notes.title}
                name="title"
                onChange={handleChanges} />

            <textarea
                id="content"
                placeholder="Take a note..."
                value={notes.content}
                name="content"
                onChange={handleChanges} />
            <button>Add</button>
        </form>
    )
}

export default Form;