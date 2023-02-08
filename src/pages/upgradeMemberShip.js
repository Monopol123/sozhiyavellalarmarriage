import React from "react";
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import Header from "./components/header";
import BreadcrumbUI from "./components/Breadcrumb";
import FooterUI from "./components/footer"
import { Link } from "react-router-dom";
import "../assets/styles/contactUs.scss";


const ContactUs = () => {
    return (
        <>
            <div className="matchesPageUI">
                <Header />
                <Container className="matchesPageUIBody">
                    <BreadcrumbUI />
                    <Row>
                        <Col>
                            <h2> Choose the best plan for you </h2>
                            <ListGroup horizontal>
                                <ListGroup.Item>This</ListGroup.Item>
                                <ListGroup.Item>ListGroup</ListGroup.Item>
                                <ListGroup.Item>renders</ListGroup.Item>
                                <ListGroup.Item>
                                    <h6> DIAMOND</h6>
                                    <h4> Rs.4999 </h4>
                                    <small> 10 Months </small>
                                    <div>                                    
                                        <p> E-Mails (10) </p>
                                        <p> Phone Number (20) </p>
                                        <p> Video Call (5) </p>
                                        <p> Express Interest </p>
                                        <p> Profile Highlight </p>
                                        <p> View Profile </p>
                                        <p> Protect Photo </p>
                                        <p> Get SMS Alert </p>
                                    </div>
                                    <Link to=""> SIGN UP </Link>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
            <FooterUI />
        </>
    )
}

export default ContactUs;