// import React from 'react'
import './footercss.css'

const Footer = () => {

    const handleAnchorClick = () => {
    
        const coordinates = '18.452972,73.9570556';
        // 18°27'10.9"N 73°57'25.4"E

        const googleMapsUrl = `https://www.google.com/maps?q=${coordinates}`;

        window.open(googleMapsUrl, '_blank');
    };



    return (
        <div>
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-cta pt-4 pb-4">
                        <div className="row align-items-center">
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="cta-text" >
                                        <h4>Find us</h4>
                                        <span onClick={handleAnchorClick}><u>Plot no 22 , Survey no 135, Uruli Devachi, Pune, Maharashtra </u></span><br/>
                                        <span>412308</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-phone"></i>
                                    <div className="cta-text">
                                        <h4>Call us</h4>
                                        <span>+91 8087676988</span><br/>
                                        <span>+91 9623932931</span><br/>
                                        <span>+91 9370225649</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="far fa-envelope-open"></i>
                                    <div className="cta-text">
                                        <h4>Mail us</h4>
                                        <span>remedyenterprises@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                                <div className="copyright-text">
                                    <p>Copyright &copy; 2018, All Right Reserved <a href="https://codepen.io/anupkumar92/">Remedy</a></p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Terms</a></li>
                                        <li><a href="#">Privacy</a></li>
                                        <li><a href="#">Policy</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer