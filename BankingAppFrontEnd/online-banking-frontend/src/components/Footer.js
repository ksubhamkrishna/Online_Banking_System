import { Link } from "react-router-dom";

export const Footer = () => {
    const containerStyle = {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
    };

    const footerStyle = {
        backgroundColor: '#000', // Black background
        color: '#fff', // White text
        marginTop: 'auto', // Push footer to bottom
        width: '100%', // Full width
        padding: '1rem', // Adjust padding as needed
        position: 'relative', // Ensure footer is positioned relative to its container
        bottom: '0',
    };

    return (
        <div style={containerStyle}>
            <div className="flex-grow-1">
                {/* Main content goes here */}
            </div>
            <footer style={footerStyle} className="d-flex flex-wrap justify-content-between align-items-center">
                <p className="col-md-4 mb-0">© Subham's E-Bank Application</p>
                <ul className="nav navbar-dark col-md-4 justify-content-end">
                    <li className="nav-item">
                        <Link to='/home' className="nav-link px-2 text-white">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='#' className="nav-link px-2 text-white">Search Products</Link>
                    </li>
                </ul>
            </footer>
        </div>
    );
}
