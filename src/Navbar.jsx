import React from 'react';
import { NavLink } from 'react-router-dom';
import CV from '../src/cv/Troian Stefan CV.pdf';
import GitHubIcon from '../node_modules/@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid" id="nav_padding">
                                <div>
                                    <p>
                                    {/*STEFAN<br />TROIAN*/}
                                    </p>
                                </div>
                                <button 
                                    className="navbar-toggler" 
                                    type="button" 
                                    data-bs-toggle="collapse" 
                                    data-bs-target="#navbarSupportedContent" 
                                    aria-controls="navbarSupportedContent" 
                                    aria-expanded="false" 
                                    aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active" exact className="nav-link" aria-current="page" to="/">.is( )</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active" className="nav-link" to="/about">.about( )</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active" className="nav-link" to="/projects">.projects( )</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active" className="nav-link" to="/contact">.contact( )</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/github"><GitHubIcon style={{ fill: '#484848' }} /></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/linkedin"><LinkedInIcon style={{ fill: '#484848' }} /></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <a className="btn btn-get-started" href={CV}>resume</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;