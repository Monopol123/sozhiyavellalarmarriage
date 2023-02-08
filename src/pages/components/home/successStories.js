import React from "react";
import {ListGroup, Card, Container, Row ,Col}  from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

function SuccessStories(props) {
    const posts = [
        {id: 1, storyImage: "https://img.shaadi.com/success-story/cSH76530942-QSH17164890-big.jpg", storytitle: 'Lorem & Ipsum', storyText: "Some quick example text to build on the card title and make up the bulk of the card's content"},
        {id: 2, storyImage: "https://img.shaadi.com/success-story/jSH80848585-hSH37823012-big.jpg",  storytitle: 'Lorem & Ipsum', storyText: "Some quick example text to build on the card title and make up the bulk of the card's content"},
        {id: 3, storyImage: "https://img.shaadi.com/success-story/cSH76530942-QSH17164890-big.jpg", storytitle: 'Lorem & Ipsum', storyText: "Some quick example text to build on the card title and make up the bulk of the card's content"},
        {id: 4, storyImage: "https://img.shaadi.com/success-story/vSH53920116-9SH77103955-big.jpg",  storytitle: 'Lorem & Ipsum', storyText: "Some quick example text to build on the card title and make up the bulk of the card's content"},
        {id: 5, storyImage: "https://img.shaadi.com/success-story/cSH76530942-QSH17164890-big.jpg", storytitle: 'Lorem & Ipsum', storyText: "Some quick example text to build on the card title and make up the bulk of the card's content"},
        {id: 6, storyImage: "https://img.shaadi.com/success-story/jSH80848585-hSH37823012-big.jpg",  storytitle: 'Lorem & Ipsum', storyText: "Some quick example text to build on the card title and make up the bulk of the card's content"},
    ];
    const post = props.posts;
    return (
        <>
          <Container>
            <div className="successStoriesPageUI grid_1 pt-0">
                <h2 className="text-center"> Success Stories </h2>
                <div className="heart-divider">
                    <span className="grey-line"></span>
                    <FaHeart className="pink-heart" />
                    <FaHeart className="grey-heart" />
                    <span className="grey-line"></span>
                </div>
                <Row className="successStories_timeLine">
                    <Col md={8} className="successStories_timeLine_box">
                      <ListGroup as="ol" >
                            <FaHeart className="pink-heart" />
                            <FaHeart className="pink-heart" />
                             {posts.map((post) =>
                                <ListGroup.Item as="li" className="" key={post.id} >
                                    <span> DEC 20, 2015 </span>
                                    <Card>
                                        <Card.Img variant="top" src={post.storyImage} />
                                        <Card.Body>
                                            <Card.Title> {post.storytitle} </Card.Title>
                                            <Card.Text>
                                                {post.storyText}
                                            </Card.Text>
                                            <Link className="linkBtn" to="/about-us">Read More... </Link>
                                        </Card.Body>
                                    </Card>
                                </ListGroup.Item>
                            )}
                        </ListGroup>
                    </Col>
                    <Col md={4}>
                        {/* <div className="religionListBox">                        
                            <h4> Religion : </h4>
                            <div className="religionListCard">
                                <Link  to="/"> Hindu  </Link>
                                <Link  to="/"> Muslim  </Link>
                                <Link  to="/"> Christian  </Link>
                                <Link  to="/"> Sikh  </Link>
                                <Link  to="/"> Inter Religion  </Link>
                            </div>
                        </div> */}

                        <div className="religionListBox">                        
                            <h4> Country : </h4>
                            <div className="religionListCard">
                                <Link  to="/viewed-profile"> India  </Link>
                                <Link  to="/viewed-profile"> Australia  </Link>
                                <Link  to="/viewed-profile"> Russia   </Link>
                                <Link  to="/viewed-profile"> India   </Link>
                                <Link  to="/viewed-profile"> Kuwait   </Link>
                                <Link  to="/viewed-profile"> Uk    </Link>
                                <Link  to="/viewed-profile" className="linkBtn"> View All   </Link>

                            </div>
                        </div>

                        <div className="religionListBox">                        
                            <h4> Caste : </h4>
                            <div className="religionListCard">
                                <Link  to="/"> Brahmin    </Link>
                                <Link  to="/"> Kapu    </Link>
                                <Link  to="/"> Kamma     </Link>
                                <Link  to="/"> Padmasali    </Link>
                                <Link  to="/"> Reddy </Link> 
                                <Link  to="/" className="linkBtn"> View All  </Link>
                            </div>
                        </div>

                        <div className="religionListBox">                        
                            <h4> Regional : </h4>
                            <div className="religionListCard">
                                <Link  to="/"> Urdu   </Link>
                                <Link  to="/"> Hindi   </Link>
                                <Link  to="/"> Marwadi    </Link>
                                <Link  to="/"> Oriya   </Link>
                                <Link  to="/" className="linkBtn"> View All  </Link>
                            </div>
                        </div>

                    </Col>
                </Row>                             
            </div>
        </Container>
        </>
    );
};

export default SuccessStories;
