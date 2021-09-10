import { useEffect, useState } from "react";
import notesDB from "../../../@fake-db/notesDB";
import PageLayout from "../../shared-components/page-layout";
import NewNote from "./NewNote";
import NoteList from "./NoteList";

const Notes = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [notes, setNotes] = useState(null);

    useEffect(() => {
        if(!notes) setNotes(notesDB.notes);
        setIsLoading(false)
    }, [notes])

    const handleSubmit = (note) => {
        setNotes(notes => [{ id: notes.length, content: note }, ...notes])
    };
    const handleRemove = (id) => setNotes(notes => notes.filter((note) => note.id !== id));

    if (isLoading) return <div>loading</div>

    return (
        <PageLayout header={<NewNote handleSubmit={handleSubmit} />} content={<NoteList data={notes} handleRemove={handleRemove} />}/>
    )
}

export default Notes;