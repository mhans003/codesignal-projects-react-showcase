import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <>
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold">CODESIGNAL SOLUTIONS</h1>
                <h2 className="display-5 fw-bold text-muted">Michael Hanson</h2>
                <hr className="my-5"/>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Browse my JavaScript solutions to coding challenges.</p>
                    <div className="justify-content-center">
                        <Link to={"solutions"}>
                            <button type="button" className="btn btn-info btn-lg px-4 mx-auto my-2 d-block">View Solutions</button>
                        </Link>
                        <a href="https://github.com/mhans003/codesignal-projects-react-showcase" target="_blank" rel="noopener noreferrer">
                            <button type="button" className="btn btn-secondary px-4 mx-auto my-2 d-block">Project Repo <i className="fab fa-github"></i></button>
                        </a>
                        <a href="https://github.com/mhans003/algorithm-solutions-cs" target="_blank" rel="noopener noreferrer">
                            <button type="button" className="btn btn-secondary px-4 mx-auto my-2 d-block">Solutions Repo <i className="fab fa-github"></i></button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Landing;