
const containerStyle = {
    margin: '0 auto',
    width: '1200px',
}

const Layout = ({ children }) => {
    return (
        <div style={containerStyle}>
            {children}
        </div>
    )
}

export default Layout;