import Note from './Note';
import NewNote from './NewNote';
import { getNotes } from '../services/NoteService';
import { useEffect, useState } from 'react';

const NoteList = () => {
    const [refresh, setRefresh] = useState(false)
    const [notesList, setNotesList] = useState([]);

    useEffect(() => {
        getNotesList();
        setRefresh(false);
    }, [refresh]);

    const updateNote = () => {
        setRefresh(true);
    }

    async function getNotesList() {
        const data = await getNotes();
        if (data.error) {
            return;
        }
        console.log(data)
        setNotesList(data);
    }

    return (
        <div className="note-list">
            <div className="row">
                {notesList.map((note, index) => {
                    return (
                        <div className="col-md-4 col-lg-3" key={index}>
                            <Note id={note.id} title={note.name} description={note.description} updateNote={updateNote} />
                        </div>
                    )

                })}
                <div className="col-md-4 col-lg-3" >
                    <NewNote handleNewNote={updateNote} />
                </div>

            </div>
        </div>
    )

}

export default NoteList;