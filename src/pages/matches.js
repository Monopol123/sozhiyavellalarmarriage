import React from "react";
import {ListGroup, Form, Container, Row ,Col}  from 'react-bootstrap';
import Header from "./components/header";
import BreadcrumbUI from "./components/Breadcrumb";
import MatchesFilter from "./components/matchesFilter";
import FullPorfileCard from "./components/fullProfileCard"
import FooterUI from "../pages/components/footer"
import "../assets/styles/matchesUI.scss";

const MatchesProfile = (props) => {
    
    return (
        <>
            <div className="matchesPageUI">
            
                <Header />
                <Container className="matchesPageUIBody">
                    <BreadcrumbUI/>
                    <Row>
                        <Col md={9}>
                            <ListGroup horizontal className="matchFilter">
                                <ListGroup.Item> Don't Show : </ListGroup.Item>
                                <ListGroup.Item>   
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Don't show already viewed " />
                                    </Form.Group> 
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label=" Don't show already contacted" />
                                    </Form.Group> 
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label=" Show profiles with photo" />
                                    </Form.Group> 
                                </ListGroup.Item>
                            </ListGroup>
                            <FullPorfileCard/>
                        </Col>

                        <Col md={3} className="match_right">
                            <MatchesFilter/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <FooterUI/>
        </>
    );
};

export default MatchesProfile;
