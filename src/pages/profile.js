import React, { useEffect, useState } from "react";
import { ListGroup, Card, Container, Row, Col, Tabs, Tab, } from 'react-bootstrap';
import Header from "./components/header";
import BreadcrumbUI from "./components/Breadcrumb";
import MatchesFilter from "./components/matchesFilter";
// import FullPorfileCard from "./components/fullProfileCard"
import FooterUI from "../pages/components/footer"
import "../assets/styles/profile.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserProfile = (props) => {

  const {id} = useParams ()
  const url =`http://localhost:3000/users/${id}`
  const [users, setUsers] = useState(null)
  
    let content = null

    useEffect(() => {
      axios.get(url)
        .then(response => {
            setUsers(response.data)
        })
    },[url])
    if(users){
      content = 

          <Card>
            <Card.Header>Profile ID : {users.id + 21000} </Card.Header>
            <Card.Body>
              <Card.Img variant="top" src={"https://plchldr.co/i/245x155?bg=EB6361"} />
              <div className="userPersnoalDetails">
                <ListGroup variant="flush">
                  <ListGroup.Item> <span> Name : </span>	<p> {users.name} </p> </ListGroup.Item>
                  <ListGroup.Item> <span> Sex : </span>	<p> {users.sex} </p> </ListGroup.Item>
                  <ListGroup.Item> <span> Religion : </span>	    <p> {users.kulam} </p> </ListGroup.Item>
                  <ListGroup.Item> <span> Marital Status : </span>	<p> {users.maritalStatus} </p> </ListGroup.Item>
                  <ListGroup.Item> <span> Location : </span>	<p> {users.employedCountry} </p> </ListGroup.Item>
                  <ListGroup.Item> <span> Profile Created By : </span>	<p> {users.id + 21000} </p> </ListGroup.Item>
                  <ListGroup.Item> <span> Education :</span>	<p> {users.education} </p> </ListGroup.Item> 
                </ListGroup>
              </div>
            </Card.Body>
          </Card>
        }
  return (
    <>
      <div className="profilePageUI">
        <Header />
        <Container className="profilePageUIBody">
          <BreadcrumbUI />
          <Row>
            <Col md={9}>
                {/* {post.map((posts) => */}
                  {content}
                {/* )} */}

              <Tabs
                defaultActiveKey="aboutMyself"
                id="uncontrolled-tab-example"
                className="mb-3 mt-4"
              >
                <Tab eventKey="aboutMyself" title="About Myself">

                  <h3 className="tabTitleTxt"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h3>
                  <p className="tabDetailTxt">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor
                  </p>
                 
                  <h3 className="tabTitleTxt mt-3"> Basics & Lifestyle </h3>

                  <div className="userPersnoalDetails">
                    <ListGroup variant="flush">
                      <ListGroup.Item> <span> Name  : </span>	<p>  </p> </ListGroup.Item>
                      <ListGroup.Item> <span> Marital Status : </span>	<p>  </p> </ListGroup.Item>
                      <ListGroup.Item> <span> Body Type : </span>	    <p>  </p> </ListGroup.Item>
                      <ListGroup.Item> <span> Marital Status : </span>	<p>  </p> </ListGroup.Item>
                      <ListGroup.Item> <span> Height : </span>	<p>  </p> </ListGroup.Item>
                      <ListGroup.Item> <span> Physical Status : </span>	<p>  </p> </ListGroup.Item>
                      <ListGroup.Item> <span> Profile Created By :</span>	<p>  </p> </ListGroup.Item>
                      <ListGroup.Item> <span> Drink  :</span>	<p>  </p> </ListGroup.Item>
                    </ListGroup>
                    <ListGroup variant="flush">
                      <ListGroup.Item> <span> Age : </span>	<p>  </p> </ListGroup.Item>
                      <ListGroup.Item> <span> Mother Tongue : </span>	<p>  </p> </ListGroup.Item>
                      <ListGroup.Item> <span> Complexion  : </span>	    <p>  </p> </ListGroup.Item>
                      <ListGroup.Item> <span> Weight : </span>	<p>  </p> </ListGroup.Item>
                      <ListGroup.Item> <span> Blood Group : </span>	<p>  </p> </ListGroup.Item>
                      <ListGroup.Item> <span> Diet : </span>	<p>  </p> </ListGroup.Item>
                      <ListGroup.Item> <span> Smoke :</span>	<p>  </p> </ListGroup.Item>
                    </ListGroup>
                  </div>

                  <h3 className="tabTitleTxt mt-3"> Religious / Social & Astro Background </h3>

                  <div className="userPersnoalDetails">
                    <ListGroup variant="flush">
                      <ListGroup.Item> <span> Time Of Birth : </span>	<p>  </p> </ListGroup.Item>
                      <ListGroup.Item> <span> Caste : </span>	<p>  </p> </ListGroup.Item>
                      <ListGroup.Item> <span> Date Of Birth : </span>	    <p>  </p> </ListGroup.Item>
                      <ListGroup.Item> <span> Place Of Birth : </span>	<p>  </p> </ListGroup.Item>
                    </ListGroup>
                    <ListGroup variant="flush">
                      <ListGroup.Item> <span> Religion : </span>	<p>  </p> </ListGroup.Item>
                      <ListGroup.Item> <span> Sub Caste : </span>	<p>  </p> </ListGroup.Item>
                      <ListGroup.Item> <span> Raasi : </span>	    <p>  </p> </ListGroup.Item>
                    </ListGroup>
                  </div>

                  <h3 className="tabTitleTxt mt-3"> Education & Career </h3>

                  <div className="userPersnoalDetails">
                    <ListGroup variant="flush">
                      <ListGroup.Item> <span> Education  : </span>	<p>  </p> </ListGroup.Item>
                      <ListGroup.Item> <span> Education Detail  : </span>	<p>  </p> </ListGroup.Item>
                      <ListGroup.Item> <span> Occupation Detail : </span>	    <p>  </p> </ListGroup.Item>
                      <ListGroup.Item> <span> Annual Income : </span>	<p>  </p> </ListGroup.Item>
                    </ListGroup>
                  </div>

                </Tab>
                <Tab eventKey="familyDetails" title="Family Details">

                </Tab>
                <Tab eventKey="partnerPreference" title="Partner Preference">

                </Tab>
              </Tabs>
            </Col>

            <Col md={3} className="match_right">
              <MatchesFilter />
            </Col>
          </Row>
        </Container>
      </div>
      <FooterUI />
    </>
  );
};

export default UserProfile;
