import React from "react";
import {
    Container,
    Row,
    Col
} from "react-bootstrap";
import Header from "./components/header";
import MatchesFilter from "./components/matchesFilter";
import BreadcrumbUI from "./components/Breadcrumb";
import FullPorfileCard from "./components/fullProfileCard";
import { BiMobileAlt, BiHeart, BiMailSend  } from 'react-icons/bi';
import FooterUI from "../pages/components/footer"
import "../assets/styles/matchesUI.scss";

function ViewedProfile() {
    return (
        <>
        <div className="matchesPageUI">
            <Header />
            <Container className="matchesPageUIBody">
                <BreadcrumbUI />
                <Row className="">
                    <Col md={3} className="match_right mt-0">
                          <div className="viewedNot_matches">
                            <h6>Matches</h6>
                            <p className="mb-0"> Mutual Matches </p>
                            <p className="mb-0"> Profiles yet to be viewed </p>
                            <p> Mutual Matches </p>
                        </div>
                        <MatchesFilter />
                    </Col>
                    <Col md={9} className="paidMembership">
                        <h3 className="tabTitleTxt"> Suitable Matches </h3>
                        <p className="tabDetailTxt"> The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.. </p>
                        <div className="accessVerified_box">
                            <p> <BiMobileAlt/> Access Verified Mobile Numbers </p>
                             <p> <BiHeart/> Access Verified Mobile Numbers </p>
                            <p> <BiMailSend/> Access Verified Mobile Numbers </p> 
                        </div>
                        <FullPorfileCard />
                    </Col>
                </Row>
            </Container>
        </div>
        <FooterUI/>
        </>
    );
}

export default ViewedProfile;