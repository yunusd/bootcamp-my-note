const style = {
    width: '1100px',
    border: '1px solid #888',
    padding: '50px'
}

const TextEditor = (props) => {
    return <textarea style={style} placeholder="Type something" rows="10" {...props} />
}

export default TextEditor;