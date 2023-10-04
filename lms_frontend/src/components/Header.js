import { Link } from "react-router-dom";

function Header(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">LMS</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                    <a className="nav-link active" aria-current="page" href="https://www.google.com">Home</a>
                    <a className="nav-link" href="https://www.google.com">Courses</a>
                    <a className="nav-link" href="https://www.google.com">Teacher</a>
                    <Link className="nav-link" to="/about">About</Link>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;