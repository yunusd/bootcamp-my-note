
const style = {
    cursor: 'pointer',
}

const containerStyle = {
    padding: '10px',
    margin: '10px 0',
    backgroundColor: '#f3f3f3',
}

const NoteListItem = ({data, handleRemove}) => {
    return (
        <div style={containerStyle}>
            <span style={style} onClick={() => handleRemove(data.id)}>delete</span> <br /> {data.content}
        </div>
    )
}

export default NoteListItem;