import React from "react";
import { Container, Row, Col, Carousel  } from 'react-bootstrap';
import Header from "./components/header";
import BreadcrumbUI from "./components/Breadcrumb";
import { Link } from "react-router-dom";
import AboutUsImg from "../assets/images/aboutImg.png"
import FooterUI from "../pages/components/footer"
import "../assets/styles/aboutUs.scss";


const AboutUs = () => {
    return (
        <>
            <div className="matchesPageUI aboutUsPage_UI">

                <Header />
                <Container className="aboutUsPage_UIBody">
                    <BreadcrumbUI />
                    <Row className=" align-items-center">
                        <Col xl={6} xs={12}>
                            <img src={AboutUsImg} alt="" className="w-100" />
                        </Col>
                        <Col xl={6} className="aboutUsPage_UI_txt">
                            <h4 className="tabTitleTxt" > About Us </h4>
                            <p className="tabDetailTxt">
                                <Link to="/"> Sozhiya Vellalar Marriage.Com </Link> is a Best Tamil Matrimony Services on the Globe. All eligible Tamil Vellalars can get on-line help to find a Suitable Tamil Vellalar Brides / Grooms with whom he/she expects to live life-long, with full of Bliss and Happiness - <Link to="/"> Sozhiya Vellalar Marriage.Com </Link> will help our Tamil Vellalar Community people to find Suitable Tamil Vellalar Brides & Grooms and We are more than 25 Years in Tamil Matrimonial Service - More Than 6 Lakh Registered Users - 10 Branches in Tamilnadu, Pondicherry, Karaikal, Kerala, Andra Pradesh and Karnataka.
                            </p>
                        </Col>
                    </Row>
                    <Row className="clientTestimonial" id="storyClient">

                    <Col xl={6} className="clientTestimonial_UI" >
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://img.shaadi.com/success-story/vSH53920116-9SH77103955-big.jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3> Bride & Groom Name</h3>
                                        <p> Aenean nonummy hendrerit mau phasellu porta. Fusce suscipit varius mi sed. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla dui.… Thank you </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                 
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://img.shaadi.com/success-story/vSH53920116-9SH77103955-big.jpg"
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h3> Bride & Groom Name </h3>
                                        <p>Aenean nonummy hendrerit mau phasellu porta. Fusce suscipit varius mi sed. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla dui.… Thank you</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://img.shaadi.com/success-story/vSH53920116-9SH77103955-big.jpg"
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3> Bride & Groom Name </h3>
                                        <p>
                                        Aenean nonummy hendrerit mau phasellu porta. Fusce suscipit varius mi sed. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla dui.… Thank you
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>
                        </Col>
                        
                        <Col xl={6} xs={12} className="clientTestimonial_txt">

                            <small>  CLIENTS </small>
                            <h2> Happy with <br />
                                Customers & Clients</h2>
                            <p> If you need any industrial solution we are available for you. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <Link to="/"> Contact Us </Link>
                        </Col>                        
                    </Row>

                </Container>
            </div>
            <FooterUI/>
        </>
    )
}

export default AboutUs;