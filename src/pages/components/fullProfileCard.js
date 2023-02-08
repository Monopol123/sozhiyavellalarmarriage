import React, { useState, useEffect } from "react";
import { Card, Button, ListGroup, Col } from 'react-bootstrap';
import axios from "axios";
import SorryMsg from "../../assets/images/sorry.png"


function FullPorfileCard(props) {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    const [loading, setLoading] = useState();

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get(
                `https://sozhiyavellalarmarriage.com/matrimonyApp/UserController/getUsersList`,
            );
            setUsers(response.data);
            setError(null);
          } catch (err) {
            setError(err.message);
            setUsers(null);
          } finally {
            setLoading(false);
          }
        };
        getData();
      }, []);
      if (users === null) {
        return (
            <Col className="d-flex justify-content-center">            
                <img src={SorryMsg} alt=""/>
            </Col>
        );
      }
    return (
        <>
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            {loading && <div>A moment please...</div>}
            <div>
                {users.data &&
                    users.data.map((curElem, index) => {
                        return (
                            <Card key={index}>
                                <Card.Header> {curElem.usr_id + 21000} | Profile Created for {curElem.usr_created_by}</Card.Header>
                                <Card.Body>
                                <Card.Img variant="top" src={"https://plchldr.co/i/245x155?bg=EB6361"} />
                                <div className="userDescription">
                                    <small> Last Login : {curElem.usr_updatedate}
                                    </small>
                                    <p> {curElem.subject} <br />
                                        More....</p>
                                </div>
                                <div className="userPersnoalDetails">
                                    <ListGroup variant="flush">
                                        <ListGroup.Item> <span> Name : </span>	<p> {curElem.usr_name} </p> </ListGroup.Item>
                                        <ListGroup.Item> <span> Sex : </span>	<p> {curElem.usr_gender} </p> </ListGroup.Item>
                                        <ListGroup.Item> <span> Religion : </span>	    <p> {curElem.usr_kothram} </p> </ListGroup.Item>
                                        <ListGroup.Item> <span> Marital Status : </span>	<p> {curElem.usr_marital_status} </p> </ListGroup.Item>
                                        <ListGroup.Item> <span> Location : </span>	<p> {curElem.usr_country} </p> </ListGroup.Item>
                                        <ListGroup.Item> <span> Profile Created By : </span>	<p> {curElem.usr_created_by} </p> </ListGroup.Item>
                                        <ListGroup.Item> <span> Education :</span>	<p> {curElem.usr_education} </p> </ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </Card.Body>
                                <div className="ms-auto">
                                    <Button className="sndMailBtn"> Send Mail </Button>
                                    <Button className="shortlistBtn">ShortListed</Button>
                                    <Button className="sndInterestBtn"> Send Interest</Button>
                                </div>
                            </Card>
                        )
                    })
                }
            </div>


        </>
    );
}

export default FullPorfileCard;