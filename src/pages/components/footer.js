import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { Link } from "react-router-dom";
import "../../assets/styles/footer.scss"

const FooterUI = () => {
    return (
        <>
            <footer className="mt-5 pt-5 pb-5">
                <Container>
                    <Row>
                        <Col lg={6} xs={12} className="about-company">
                            <h2>About Us</h2>
                            <p className="pr-5 "> Sozhiya Vellalar Marriage.Com is a Best Tamil Matrimony Services on the Globe. All eligible Tamil Vellalars can get on-line help to find a Suitable Tamil Vellalar Brides / Grooms with whom he/she expects to live life-long, with full of Bliss and Happiness - Sozhiya Vellalar Marriage.Com will help our Tamil Vellalar Community people to find Suitable Tamil Vellalar Brides & Grooms and We are more than 25 Years in Tamil Matrimonial Service - More Than 6 Lakh Registered Users - 10 Branches in Tamilnadu, Pondicherry, Karaikal, Kerala, Andhra Pradesh and Karnataka. </p>
                            <p>
                                <a href="#">
                                    <i className="fa fa-facebook-square mr-1"></i>
                                </a>
                                <a href="#">
                                    <i className="fa fa-linkedin-square"></i>
                                </a>
                            </p>
                        </Col>
                        <Col lg={3} xs={12} className="links">
                            <h4 className="mt-lg-0 mt-sm-3"> Quick Links </h4>
                            <ul className="m-0 p-0">
                                <li>- <a href="#"> Sozhiya Vellalar Sangam Website,  </a></li>
                                <li>- <a href="#"> Facebook </a></li>
                                <li>- <a href="#">  WhatsApp </a></li>
                                <li>- <a href="#"> VOC Pillai Website </a></li>
                            </ul>
                        </Col>
                        <Col lg={3} xs={12} className="location">
                            <h4 className="mt-lg-0 mt-sm-4"> Help & Support </h4>
                            <p> Sozhiya Vellalar Sangam Marriage Information office  </p>
                            <p className="mb-0"><i className="fa fa-phone mr-3"></i> +91 99999 88888 </p>
                            <p><i className="fa fa-envelope-o mr-3"></i> Info@sozhiyavellalarmarriage.com </p>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className=" copyright">
                            <p className=""><small className="">© 2022. All Rights Reserved.</small></p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
};

export default FooterUI;