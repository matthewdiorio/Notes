import { MdSave } from 'react-icons/md';
import { addNote } from '../services/NoteService'
import { useState, useEffect } from 'react';

const NewNote = ({ handleNewNote }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [response, setResponse] = useState('');

    useEffect(() => {
        handleNewNote();
        setName("");
        setDescription("");
    }, [response]);

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const saveOnClick = (e) => {
        let addNoteResponse = addNote(name, description);
        setResponse(addNoteResponse);

    }
    return (
        <div className="note new-note">
            <form>
                <input type="text" id="name" name="name" placeholder="Add a new note" value={name} onChange={handleNameChange} className="note-title"></input>
                <textarea id="description" name="description" value={description} onChange={handleDescriptionChange} className="note-description"></textarea>
            </form>
            <div className="button-container">
                <MdSave className="save-button" size="1.4rem" onClick={saveOnClick} />
            </div>
        </div>
    )
}
export default NewNote;