import TextEditor from "../../../shared-components/text-editor";

const NoteForm = ({ value, handleChange }) => {
    return (
        <div>
            <TextEditor value={value} onChange={(event) => handleChange(event.target.value)}/>
        </div>
    )
}

export default NoteForm;