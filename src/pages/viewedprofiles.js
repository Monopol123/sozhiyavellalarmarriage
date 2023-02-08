import React from "react";
import {
    Container,
    Row,
    Col,
    Tabs,
    Tab,
} from "react-bootstrap";
import Header from "./components/header";
import MatchesFilter from "./components/matchesFilter";
import BreadcrumbUI from "./components/Breadcrumb";
import ShortProfileCrad from "./components/shortProfileCard";
import CoupleImg from "../assets/images/dummy-couple-img.jpg";
import PrivacySetting from "./components/privacySetting";
import FooterUI from "../pages/components/footer"
import "../assets/styles/matchesUI.scss";

function ViewedProfile() {
    return (
        <>
        <div className="matchesPageUI">
            <Header />
            <Container className="matchesPageUIBody">
                <BreadcrumbUI />
                <Row className="ViewedMembersProfiles_UI">
                    <Col md={3} className="match_right mt-0">
                        <div className="ViewedMembers_lifeSide">
                            <img src={CoupleImg} alt=""/>
                        </div>
                        <MatchesFilter />
                    </Col>
                    <Col md={9}>
                        <Tabs
                            defaultActiveKey="membersProfiles"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                            >
                            <Tab eventKey="membersProfiles" title="Members Viewded my profile">
                                <h3 className="tabTitleTxt">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                </h3>
                                <p className="tabDetailTxt"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution </p>
                                <ShortProfileCrad />
                            </Tab>
                            <Tab eventKey="setting" title="Privacy Settings">
                                <PrivacySetting/>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </div>
        <FooterUI/>
        </>
    );
}

export default ViewedProfile;