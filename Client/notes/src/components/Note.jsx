import { MdDeleteForever, MdSave } from 'react-icons/md';
import { deleteNote } from '../services/NoteService';
import { useState } from 'react';
import { updateNoteContent } from '../services/NoteService';
const Note = ({ id, title, description, updateNote }) => {

    const [name, setName] = useState(title);
    const [noteDescription, setNoteDescription] = useState(description);
    const [isEdited, setIsEdited] = useState(false);
    const handleNameChange = (e) => {
        setIsEdited(true)
        setName(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setIsEdited(true)
        setNoteDescription(e.target.value);
    }

    const saveOnClick = () => {
        setIsEdited(false);
        updateNoteContent(id, name, noteDescription)

    }
    const deleteOnClick = () => {
        deleteNote(id);
        updateNote();
    }

    return (
        <div className="note">
            <form>
                <input type="text" name="description" value={name} onChange={handleNameChange} className="note-title"></input>

                <textarea name="description" value={noteDescription} onChange={handleDescriptionChange} className="note-description"></textarea>
            </form>
            <div className='button-container' >
                {isEdited && <MdSave className="save-button" size="1.4rem" onClick={saveOnClick} />}
                <MdDeleteForever className="delete-button" size="1.4rem" onClick={deleteOnClick} />
            </div>
        </div>
    )
}

export default Note;