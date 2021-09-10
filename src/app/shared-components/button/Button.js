const style = {
    backgroundColor: '#888',
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    fontSize: '16px',
    cursor: 'pointer'
}

const Button = ({children, ...rest}) => {
    return <button style={style} {...rest}>{children}</button>
}

export default Button;