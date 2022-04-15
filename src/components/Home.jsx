import { Link } from "react-router-dom";
import "../css/card.css"
import "../css/team.css"



const Home = () => {
  if (sessionStorage.getItem("role") === "Admin") {
    window.location = "/dashboard"
  }
  return (
    <>

      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleCaptions" data-slide-to={1} />
          <li data-target="#carouselExampleCaptions" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              style={{ height: "600px" }}
              src={process.env.PUBLIC_URL + "../images/cour3.jpg"}
              className="d-block w-100"
              alt="Slides"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Find your bike today!</h5>
              <h4>Book the best bike for you</h4>
            </div>
          </div>
          <div className="carousel-item">
            <img
              style={{ height: "600px" }}
              src={process.env.PUBLIC_URL + "../images/cour2.jpg"}
              className="d-block w-100"
              alt="Slides"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Find the best variant</h5>
              <h4>A lot of variants available</h4>
            </div>
          </div>
          <div className="carousel-item">
            <img
              style={{ height: "600px" }}
              src={
                process.env.PUBLIC_URL +
                "../images/slider-image-3-1920x600.jpg"
              }
              className="d-block w-100"
              alt="Slides"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Best Services</h5>
              <h4>Full Functional Feedback System</h4>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev bg-transparent border-0"
          type="button"
          data-target="#carouselExampleCaptions"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </button>
        <button
          className="carousel-control-next bg-transparent border-0"
          type="button"
          data-target="#carouselExampleCaptions"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </button>
      </div>
      <hr></hr>
      <section id="team" class="team section-bg">
        <div class="container" data-aos="fade-up">

          <div class="section-title">
            <h2 className="text-center">Meet Our Team</h2>

          </div>
          <hr ></hr>

          <div class="row">


            <div className="staff">
              <div className="containers mr-5">
                <div class="img-containers">
                  <img src="images/210940320081.jpeg"></img>
                </div>

                <div className="user-info">
                  <h2>Prachi Damke</h2>

                </div>
              </div>

              <div className="containers mr-5">
                <div class="img-containers">
                  <img src="images/210940520078.jpg"></img>
                </div>

                <div className="user-info">
                  <h2>Sachin Jadhav</h2>

                </div>
              </div>
              <div className="containers mr-5">
                <div class="img-containers ">
                  <img src="images/sujit.jpeg"></img>
                </div>

                <div className="user-info">
                  <h2>Sujit mali</h2>

                </div>
              </div>

            </div>
            <div className="staff">
              <div className="containers mr-5">
                <div class="img-containers">
                  <img src="images/divesh.jpeg"></img>
                </div>

                <div className="user-info">
                  <h2>Divesh Patil</h2>

                </div>
              </div>
              <div className="containers mr-3">
                <div class="img-containers">
                  <img src="images/km.jpeg"></img>
                </div>

                <div className="user-info">
                  <h2>Kamran Shaikh</h2>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <footer id="footer">
        <div class="container">
          <div class="copyright">
            &copy; Copyright <strong><span>Amaze Bike Rental</span></strong>. All Rights Reserved
          </div>
          <div class="credits">

            Designed by <a href="/">Team 23</a>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Home;