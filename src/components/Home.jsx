import { Link } from "react-router-dom";
import "../css/card.css"
import "../css/team.css"



const Home = () => {
  if (sessionStorage.getItem("role") === "Admin") {
    window.location = "/dashboard"
  }
  return (
    <>

      <div>
        <div className="bg-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1622185135825-d34b40aa03ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")', height: '100vh' }}>
          <div class=" text-bg">
            <div class="f11">
              <span>the best</span>
              <h1>Bike station EVER</h1>
            </div>
            <p>It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point of
              using
              Lorem Ipsum is that it has a more-or-less normal distribution of
              letters, as
              opposed to using 'Content here, content here', making it look</p>

            <Link to="./Login">  <button className="btn btn-primary signup">Exlore More</button></Link>
          </div>

        </div>
        <div className="latest-products">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2>Offers</h2>
                  <a href="offers.html">view more <i className="fa fa-angle-right" /></a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product-item">
                  <a href="offers.html"><img src="images/offer-1-370x270.jpg" alt /></a>
                  <div className="down-content">
                    <a href="offers.html"><h4>Lorem ipsum dolor sit amet, consectetur</h4></a>
                    <h6><small>from</small> $120 <small>per weekend</small></h6>
                    <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product-item">
                  <a href="offers.html"><img src="images/offer-2-370x270.jpg" alt /></a>
                  <div className="down-content">
                    <a href="offers.html"><h4>Estorum aspernatur officiis accusamus </h4></a>
                    <h6><small>from</small> $150 <small>per weekend</small></h6>
                    <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product-item">
                  <a href="offers.html"><img src="images/offer-3-370x270.jpg" alt /></a>
                  <div className="down-content">
                    <a href="offers.html"><h4>Reiciendis ullam culpa optio providen</h4></a>
                    <h6><small>from</small> $150 <small>per weekend</small></h6>
                    <p>Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <section id="team" class="team section-bg">
          <div class="container" data-aos="fade-up">

            <div class="section-title">
              <h2>Team</h2>
              <p>Check our Team</p>
            </div>
            <hr ></hr>

            <div class="row">


              <div className="staff">
                <div className="containers mr-5">
                  <div class="img-containers">
                    <img src="images/210940320081.jpeg"></img>
                  </div>

                  <div className="user-info">
                    <h2>Prachi Dhamke</h2>
                    <span>20-july</span>
                  </div>
                </div>

                <div className="containers mr-5">
                  <div class="img-containers">
                    <img src="images/210940520078.jpg"></img>
                  </div>

                  <div className="user-info">
                    <h2>Sachin Jadhav</h2>
                    <span>20-july</span>
                  </div>
                </div>
                <div className="containers mr-5">
                  <div class="img-containers ">
                    <img src="images/sujit.jpeg"></img>
                  </div>

                  <div className="user-info">
                    <h2>Sujit mali</h2>
                    <span>20-july</span>
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
                    <span>20-july</span>
                  </div>
                </div>
                <div className="containers mr-3">
                  <div class="img-containers">
                    <img src="images/210940320081.jpeg"></img>
                  </div>

                  <div className="user-info">
                    <h2>Prachi Dhamke</h2>
                    <span>20-july</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>






      </div>
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