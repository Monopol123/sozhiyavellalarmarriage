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
import FooterUI from "./components/footer"
import { Link } from "react-router-dom";
import "../assets/styles/matchesUI.scss";

function SendInbox() {
    return (
        <>
            <div className="matchesPageUI">
                <Header />
                <Container className="matchesPageUIBody">
                    <BreadcrumbUI />
                    <Row className="ViewedMembersProfiles_UI">
                        <Col md={3} className="match_right mt-0">
                            <div className="viewedNot_matches">
                                <h6>Matches</h6>
                                <p className="mb-0"> <Link to="/matches" > Mutual Matches </Link>  </p>
                                <p className="mb-0"> <Link to="/viewed-Not-Contacted" >Profiles yet to be viewed </Link> </p>
                                <p> <Link to="/matches" > Mutual Matches </Link>  </p>
                            </div>  
                            <div className="ViewedMembers_lifeSide">
                                <img src={CoupleImg} alt="" />
                            </div>
                            <MatchesFilter />
                        </Col>
                        <Col md={9}>
                            <h3 className="tabTitleTxt">
                                Inbox
                            </h3>
                            <p className="tabDetailTxt"> The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                            <Tabs
                                defaultActiveKey="allInbox"
                                id="uncontrolled-tab-example"
                                className="mb-3 mt-4" 
                            >
                                <Tab eventKey="allInbox" title="All">
                                    <ShortProfileCrad />
                                </Tab>
                                <Tab eventKey="newInbox" title="New">
                                    <ShortProfileCrad />
                                </Tab>
                                <Tab eventKey="readInbox" title="Read">
                                    <PrivacySetting/>
                                </Tab>
                                <Tab eventKey="acceptedRequest" title="Accepted">
                                    <ShortProfileCrad />
                                </Tab>
                                <Tab eventKey="notInterested" title="Not Interested">
                                    <ShortProfileCrad />
                                </Tab>
                                <Tab eventKey="repliedRequest" title="Replied">
                                    <ShortProfileCrad />
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </Container>
            </div>
            <FooterUI />
        </>
    );
}

export default SendInbox;