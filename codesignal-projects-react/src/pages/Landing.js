import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <>
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold">CODESIGNAL SOLUTIONS</h1>
                <h2 className="display-5 fw-bold text-muted">Michael Hanson</h2>
                <h2 className="display-5 fw-bold text-muted">(Style Me Later!)</h2>
                <hr className="my-5"/>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Browse my JavaScript solutions to coding challenges.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <Link to={"solutions"}>
                            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">View Solutions</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Landing;