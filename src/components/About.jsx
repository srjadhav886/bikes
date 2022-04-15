function About() {
    return (
        <>
            <div className="page-heading about-heading header-text" style={{ backgroundImage: 'url(images/aboutus.jpeg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-content">
                                <h4>about us</h4>
                                <h2>Amaze Bike rental</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="best-features about-features">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-heading">
                                <h2>We are providing bike on rents</h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-image" style={{ width: 450, heigth: 450 }}>
                                <img src="images/newlogo.png" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="left-content">
                                <h3>We are Amaze Bike Rental</h3>
                                <p>
                                    We have varieties of bikes for all bikes lovers. Whoever are
                                    required any type of bike for for day or for number of days,
                                    this is wonderful platform for your need. We provide effient
                                    service for rental bikes which is affordable for everyone.
                                    <br />
                                    <br />
                                    Our experties in bike rental may fulfilled anyone's
                                    requirement for jounney, for trippling, for date or for some
                                    other works. So you don't need to suffer morefor not having
                                    bike. We are ready to provide you any type of bike with just
                                    minimun documentation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default About;