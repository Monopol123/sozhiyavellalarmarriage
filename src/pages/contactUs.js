import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Header from "./components/header";
import BreadcrumbUI from "./components/Breadcrumb";
import { TiLocation, TiPhone, TiMail } from "react-icons/ti";
import FooterUI from "./components/footer"
import "../assets/styles/contactUs.scss";


const ContactUs = () => {
    return (
        <>
            <div className="matchesPageUI contacts_UI">

                <Header />
                <Container className="contacts_UIBody">
                    <BreadcrumbUI />

                    <Row>
                        <Col className="contactDetailTxt">
                            <p >
                                Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque penatibus et magnis dis parturient. montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio. Morbi nunc odio, gravida at, cursus nec, luctus a, lorem. Maecenas tristique orci ac sem. Duis ultricies pharetra magna. Donec accumsan malesuada orci. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit.
                            </p>
                        </Col>
                        <Row className="contactPersonalDetail">
                            <Col md={4} xs={12}>

                                <h6> <TiLocation/> Address :  </h6>
                                <p>8901 Nulla Pariatur, Ipsum, D05 87GR.
                                </p>
                            </Col>
                            <Col md={4} xs={12}>

                                <h6> <TiPhone/> Telephones : </h6>
                                <p> +1 800 245 4578 +1 800 789 5478
                                </p>
                            </Col>
                            <Col md={4} xs={12}>

                                <h6> <TiMail/> E-mail : </h6>
                                <p> contactus@sozhiyavellalarmarriage.com
                                </p>
                            </Col>
                        </Row>

                    </Row>

                </Container>
            </div>
            <FooterUI />
        </>
    )
}

export default ContactUs;