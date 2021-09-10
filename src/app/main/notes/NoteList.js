import NoteListItem from "./NoteListItem";

const style = {
    width: '100%',
}

const NoteList = ({data, handleRemove}) => {
    return (
        <div style={style}>
            {data.map((note, key) => (
                <NoteListItem key={key} data={note} handleRemove={handleRemove}/>
            ))}
        </div>
    )
}

export default NoteList;