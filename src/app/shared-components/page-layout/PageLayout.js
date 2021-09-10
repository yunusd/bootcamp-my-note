
const containerStyle = {
    margin: '0 auto',
    width: '1200px',
}

const headerStyle = {
    display: 'flex',
    justifyContent: 'center'
}

const contentStyle = {
    display: 'flex',
    margin: '20px 0'
}

const PageLayout = ({ header, content }) => {
    return (
        <div style={containerStyle}>
            <div style={headerStyle}>{header}</div>
            <div style={contentStyle}>{content}</div>
        </div>
    )
}

export default PageLayout;