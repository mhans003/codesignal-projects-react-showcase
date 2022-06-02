import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <>
            <div className="mb-5 text-center">
                <div className="heading-wrapper mb-5">
                    <div className="light-overlay py-5">
                        <div className="py-5">
                            <h1 className="display-5">Algorithm Solutions</h1>
                            <h2 className="display-5 text-muted">Michael Hanson</h2>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4" style={{fontSize:"1.4rem"}}>Browse my JavaScript solutions to coding challenges (CodeSignal, LeetCode, etc.)</p>
                    <div className="justify-content-center">
                        {/*
                        <Link to={"/solutions/codesignal-projects-react-showcase"}>
                            <button type="button" className="btn btn-info btn-lg px-4 mx-auto my-2 d-block">View Solutions</button>
                        </Link>
                        */}
                        
                        <Link to={"solutions"}>
                            <button type="button" className="btn btn-info btn-lg btn-xl font-medium px-4 mx-auto my-2 d-block">View Solutions</button>
                        </Link>
                          
                        <div className="mt-4">
                            <a href="https://github.com/mhans003/codesignal-projects-react-showcase" target="_blank" rel="noopener noreferrer">
                                <button type="button" className="btn btn-secondary btn-secondary-fixed px-4 mx-auto my-2 d-block">Project Repo <i className="fab fa-github"></i></button>
                            </a>
                            <a href="https://github.com/mhans003/algorithm-solutions-cs" target="_blank" rel="noopener noreferrer">
                                <button type="button" className="btn btn-secondary btn-secondary-fixed px-4 mx-auto my-2 d-block">Solutions Repo <i className="fab fa-github"></i></button>
                            </a>
                            <a href="https://mhans003.github.io/portfolio/portfolio.html" target="_blank" rel="noopener noreferrer">
                                <button type="button" className="btn btn-secondary btn-secondary-fixed px-4 mx-auto my-2 d-block">Michael's Portfolio <i className="fas fa-briefcase"></i></button>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Landing;