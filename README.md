[ ] 1. Create a new React app.
[ ] 2. Create a App.jsx component.
[ ] 3. Create a Header.jsx component that renders a <header> element
to show the Keeper App name in an <h1>.
[ ] 4. Create a Footer.jsx component that renders a <footer> element
to show a copyright message in a <p> with a dynamically updated year.
[ ] 5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
[ ] 6. Make sure that the final website is styled like the example shown here:
https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.
Implement the add note functionality.
    pass the new note back to the app
    add new note to an array
    take array and render seperate Note components for each item

implement the delete note functionality.
    -callback from the Note component to trigger a delete function 
    -use the filter function to filter out the item that needs deletion
    -pass an id over to the Note component, pass it back to the App when deleting