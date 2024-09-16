import { Link } from 'react-router-dom';

const NotFound = () => {
    const containerStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
    };

    const gifStyle = {
        display: 'flex',
        justifyContent: 'center',
    };

    const contentStyle = {
        margin: '3rem 0',
    };

    const headingStyle = {
        fontSize: '2.5rem',
        fontWeight: 700,
    };

    const paragraphStyle = {
        fontSize: '1.3rem',
        padding: '0.7rem 0',
    };

    const buttonStyle = {
        padding: '1rem',
        borderRadius: '15px',
        outline: 'none',
        border: 'none',
        background: '#0046d4',
        color: '#fff',
        fontSize: '1.3rem',
        cursor: 'pointer',
    };

    return (
        <div style={containerStyle}>
            <div style={gifStyle}>
                <img
                    src="https://i.postimg.cc/2yrFyxKv/giphy.gif"
                    alt="gif_ing"
                />
            </div>
            <div style={contentStyle}>
                <h1 style={headingStyle}>This page is gone.</h1>
                <p style={paragraphStyle}>
                    ...maybe the page you&apos;re looking for is not found or never existed.
                </p>
                <Link to="/" target="_blank" rel="noopener noreferrer">
                    <button style={buttonStyle}>Back to home <i className="far fa-hand-point-right"></i></button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
