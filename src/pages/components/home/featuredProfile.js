import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Card, Col } from 'react-bootstrap';
import { FaHeart } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import SorryMsg from "../../../assets/images/sorryNoData.png"

function FeaturedProfile(props) {
    const [users, setUser] = useState([]);
    const [error, setError] = useState(null);

    const [length, setLength] = useState('0');

    const [loading, setLoading] = useState();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(
                    `https://sozhiyavellalarmarriage.com/matrimonyApp/UserController/getUsersList`,
                );
                setUser(response.data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    //   const length = users.length(0);

    if (!users) {
        return (
            <>
                <div className="featureProfilePageUI grid_1">
                    <Container>
                        <h2 className="text-center"> Featured Profiles </h2>
                        <div className="heart-divider">
                            <span className="grey-line"></span>
                            <FaHeart className="pink-heart" />
                            <FaHeart className="grey-heart" />
                            <span className="grey-line"></span>
                        </div>
                        <Col className="d-flex justify-content-center">
                            <img src={SorryMsg} alt="" />
                        </Col>
                    </Container>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="featureProfilePageUI grid_1">
                <Container>
                    <h2 className="text-center"> Featured Profiles </h2>
                    <div className="heart-divider">
                        <span className="grey-line"></span>
                        <FaHeart className="pink-heart" />
                        <FaHeart className="grey-heart" />
                        <span className="grey-line"></span>
                    </div>
                    {users.length === 0 ?
                        (
                            <Col className="d-flex justify-content-center">
                                <img src={SorryMsg} alt="" />
                            </Col>
                        ) : (

                            <Carousel
                                swipeable={false}
                                draggable={false}
                                responsive={responsive}
                                ssr={true} // means to render carousel on server-side.
                                // infinite={true}
                                // // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                                autoPlaySpeed={1000}
                                keyBoardControl={true}
                                customTransition="all .5s"
                            >
                                {users.data &&
                                    users.data.map((curElem, index) => {
                                        return (
                                            <Link to="/matches" className="text-decoration-none">
                                                <Card key={index} >
                                                    <div className="featureProfile_card_image">
                                                        <Card.Img variant="top" src={"https://plchldr.co/i/245x155?bg=EB6361"} />
                                                    </div>
                                                    <Card.Body>
                                                        <Card.Title>  {curElem.usr_name} {curElem.usr_id + 21000} </Card.Title>
                                                        <Card.Text>
                                                            {curElem.usr_name}
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Link>
                                        )
                                    })
                                }
                            </Carousel>
                        )
                    }
                </Container>
            </div>
        </>
    );
};

export default FeaturedProfile;
