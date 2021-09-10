import { useState } from "react/cjs/react.development";
import Button from "../../shared-components/button";
import NoteForm from "./note-form";

const NewNote = ({ handleSubmit }) => {
    const [state, setState] = useState('');
    
    return (
        <div>
            <NoteForm value={state} handleChange={(value) => setState(value)} />
            <Button
                onClick={() => {
                    if(state.length > 0) handleSubmit(state);
                    setState('');
                }}>
                    Create
            </Button>
        </div>
    )
}

export default NewNote;