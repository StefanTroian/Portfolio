import React from 'react';

const About = () => {
  return ( 
    <>
      <div className="my-5">
        <h1 className="text-center">About me</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="text-begin col-md-6 mx-auto">
            <p>I'm a 3rd year Computer Science student in Bucharest, 
              passionate about the web industry, with sense of humor 
              and eager to learn new things.
            </p><br /><br />
          </div>
          <div className="container">
            <div className="row col-md-6 mx-auto">
                <div className="col-6 p-0 text-start">
                  <p><strong>I feel comfortable using it</strong></p>
                </div>
                <div className="col-6 p-0">
                  <p>HTML5, S(CSS), Javascript, Java</p>
                </div>
            </div>

            <div className="row col-md-6 mx-auto">
                <div className="col-6 p-0 text-start">
                  <p><strong>Basic knowledge \ still learning it</strong></p>
                </div>
                <div className="col-6 p-0">
                  <p>React, Javascript, Python</p>
                </div>
            </div>

            <div className="row col-md-6 mx-auto">
                <div className="col-6 p-0 text-start">
                  <p><strong>Technologies \ tools I used</strong></p>
                </div>
                <div className="col-6 p-0">
                  <p>Node.js, Express.js, Bootstrap, Tomcat, Maven, Linux, 
                    Git, Photoshop, C/C++, Heroku
                  </p>
                </div>
            </div>

            <div className="row col-md-6 mx-auto">
                <div className="col-6 p-0 text-start">
                  <p><strong>Databases</strong></p>
                </div>
                <div className="col-6 p-0">
                  <p>MySQL, Oracle</p>
                </div>
            </div>

          </div>
        </div>
      </div>

      
    </>
  );

};

export default About;