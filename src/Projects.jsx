import React from 'react';
import { NavLink } from 'react-router-dom';
import portfolio from "../src/images/portfolio.png";
import stportraits from "../src/images/stportraits.png";
import python from "../src/images/python.png";
import store from "../src/images/store.png";
import trotinete from "../src/images/trotinete_el.png";

const Projects = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Some things I've built </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
                  
              <div className="col-md-4 col-10 mx-auto">
                  <div className="card">
                      <img src={portfolio} className="card-img-top" alt="..." />
                      <div className="card-body">
                          <h5 className="card-title">Portfolio</h5>
                          <div className="card-text">
                            <p>Responsive personal portfolio.<br /><br />
                            <span className="text-secondary">React, Bootstrap, Email.js</span></p>
                          </div>
                          <NavLink to="" className="btn btn-get-started">
                              Github
                          </NavLink>
                          <NavLink to="./home" className="btn">
                              Link
                          </NavLink>
                      </div>
                  </div>
              </div>

              <div className="col-md-4 col-10 mx-auto">
                  <div className="card">
                      <img src={stportraits} className="card-img-top" alt="..." 
                      title="A responsive commercial website where users can add theirs creative
                              services and communicate with others if they're loged in." />
                      <div className="card-body">
                          <h5 className="card-title">stportraits</h5>
                          <div className="card-text">
                            <p>Responsive commercial website.<br /><br />
                            <span className="text-secondary">Node.js, Express.js, HTML, S(CSS), JS, MySQL, Heroku</span></p>
                          </div>
                          <NavLink to="./stportraits-git" className="btn btn-get-started">
                              Github
                          </NavLink>
                          <NavLink to="./stportraits" className="btn">
                              Link
                          </NavLink>
                      </div>
                  </div>
              </div>

              <div className="col-md-4 col-10 mx-auto">
                  <div className="card">
                      <img src={python} className="card-img-top" alt="..." 
                      title="The project illustrates the possibility of automatically identify the misogynous 
                              content in twitter post in italian language." />
                      <div className="card-body">
                          <h5 className="card-title">Misogyny Identification</h5>
                          <div className="card-text">
                            <p>Automatically identifying the misogynous Italian twitters.<br /><br />
                            <span className="text-secondary">Python</span></p>
                          </div>
                          <NavLink to="./python" className="btn btn-get-started">
                              Github
                          </NavLink>
                      </div>
                  </div>
              </div>

              <div className="col-md-4 col-10 mx-auto">
                  <div className="card">
                      <img src={store} className="card-img-top" alt="..." 
                      title="The idea of the project is to help managing a store. It has two types of users with 
                      different database manipulation options for each of them." />
                      <div className="card-body">
                          <h5 className="card-title">Store management</h5>
                          <div className="card-text">
                            <p>The idea of the project is to help managing a store.<br /><br />
                            <span className="text-secondary">Java (Tomcat, Maven), HTML, CSS, MySQL</span></p>
                          </div>
                          <NavLink to="./store" className="btn btn-get-started">
                              Github
                          </NavLink>
                      </div>
                  </div>
              </div>

              <div className="col-md-4 col-10 mx-auto">
                  <div className="card">
                      <img src={trotinete} className="card-img-top" alt="..." 
                      title="The project represents a database concept for illustrating the activity of renting 
                      electric scooters." />
                      <div className="card-body">
                          <h5 className="card-title">Electric scooters</h5>
                          <div className="card-text">
                            <p>Database concept for activity of renting electric scooters.<br /><br />
                            <span className="text-secondary">SQL</span></p>
                          </div>
                          <NavLink to="./trotinete" className="btn btn-get-started">
                              Github
                          </NavLink>
                      </div>
                  </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );

};

export default Projects;