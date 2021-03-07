import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_wjau1se', 'template_1smgiqc', e.target, 'user_kUn48MfQYPQ1ssFQB2sQG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert("Email sent!");
      e.target.reset();
  }

  return ( 
    <>
      <div className="my-5">
        <h1 className="text-center">Contact</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <div className="row">
              <p>Feel free to send an e-mail on <strong>stefantroian28@gmail.com</strong></p>
            </div>
            <div className="row">
              <div className="custom-w-5">
                <hr/>
              </div>
              <p className="custom-w-2 text-center">or</p>
              <div className="custom-w-5">
                <hr/>
              </div>
            </div>
            <form onSubmit={sendEmail}>
              <div className="mb-3">
                <label for="fullname" className="form-label">
                  Full Name
                </label>
                <input 
                  type="text"
                  className="form-control"
                  id="fullname"
                  placeholder="FirstName LastName"
                  name="name"
                  required
                />
              </div>
              
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email
                </label>
                <input 
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  name="email"
                  required
                />
              </div>

              <div className="mb-3">
                <label for="subject" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="subject"
                  rows="4"
                  name="message"
                  required
                ></textarea>
              </div>

              <div className="col-12 mb-5">
                <button className="btn btn-get-started" type="submit">
                  Send Message
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );

};

export default Contact;