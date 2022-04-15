const Contact = () => {
  return (
    <>
      <div>
        <div className="page-heading contact-heading header-text" style={{ backgroundImage: 'url(images/aboutus.jpeg)' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="text-content">
                  <h4>Amaze Bike rental</h4>
                  <h2>Contact Us</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="find-us">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2>Our Location on Maps</h2>
                </div>
              </div>
              <div className="col-md-8">
                <div id="map">
                  <iframe
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDwiPNap0G4TGcdv4ynledCtWNPc3T_YbE
                 &q=CDAC Kharghar Mumbai"
                    width="100%"
                    height="330px"
                    frameBorder={0}
                    style={{ border: 0 }}
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="left-content">
                  <h4>About our office</h4>
                  <p>
                    <h4>CDAC Project Team-23</h4>
                    <br />
                    <br />
                    Our project is Bike Rental System.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="send-message">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2>Send us a Message</h2>
                </div>
              </div>
              <div className="col-md-8">
                <div className="contact-form">
                  <form id="contact" action method="post">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <fieldset>
                          <input
                            name="name"
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Full Name"
                            required
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <fieldset>
                          <input
                            name="email"
                            type="text"
                            className="form-control"
                            id="email"
                            placeholder="E-Mail Address"
                            required
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <fieldset>
                          <input
                            name="subject"
                            type="text"
                            className="form-control"
                            id="subject"
                            placeholder="Subject"
                            required
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <textarea
                            name="message"
                            rows={6}
                            className="form-control"
                            id="message"
                            placeholder="Your Message"
                            required
                            defaultValue={""}
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <button
                            type="submit"
                            id="form-submit"
                            className="filled-button"
                          >
                            Send Message
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-4">
                <img src="/images/team_01.png" className="img-fluid" alt />
                <h5 className="text-center" style={{ marginTop: 15 }}>
                  Administrator
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Contact;