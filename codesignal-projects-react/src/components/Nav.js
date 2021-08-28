import { Link } from 'react-router-dom';
import Landing from '../pages/Landing';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <a className="navbar-brand" href="#">CodeSignal Solutions</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;