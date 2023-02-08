import React, { useState, useEffect } from "react";
import {Card, Button, Col}  from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from 'react-icons/fa';
import axios from "axios";
import SorryMsg from "../../assets/images/sorry.png"

const ShortProfileCrad = (props) =>{
    const [shortProfileUser , setShortProfileUser] = useState([]);
    const [error, setError] = useState(null);

    const [loading, setLoading] = useState();

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get(
                `https://sozhiyavellalarmarriage.com/matrimonyApp/UserController/getUsersList`,
            );
            setShortProfileUser(response.data);
            setError(null);
          } catch (err) {
            setError(err.message);
            setShortProfileUser(null);
          } finally {
            setLoading(false);
          }
        };
        getData();
      }, []);

      if (shortProfileUser === null) {
        return (
            <Col className="d-flex justify-content-center">            
                <img src={SorryMsg} alt=""/>
            </Col>
        );
      }

   return(
    <>
        {shortProfileUser.data &&
        shortProfileUser.data.map((curElem, index) => {
                 return(
            <Card key={index}>
                <Card.Body>
                    <Card.Img variant="top" src={"https://plchldr.co/i/245x155?bg=EB6361"} />
                    <div className="userDescription"> 
                        <h4> {curElem.usr_name} {curElem.usr_id + 21000}
                            <div className="socialIcons">
                                <Link  to="/" > <FaFacebookF/> </Link>
                                <Link  to="/" > <FaTwitter/> </Link>
                                <Link  to="/" className="googlePlusIcon" > <FaGooglePlusG/> </Link>
                            </div>
                        </h4>
                        <small> Last Login : {curElem.userLastSeen} </small>
                        <p> 
                            <b> Sex :  </b> {curElem.usr_gender} | 
                            <b> Religion : </b> {curElem.usr_kothram} |
                            <b> Education : </b> {curElem.usr_education}|
                            <b> Location  : </b> {curElem.usr_country}
                        </p>
                        <Link to={"/profile/"+ curElem.usr_id}> view full profile </Link>
                    </div>                                   
                </Card.Body>
                <Card.Footer>
                    <Button className="addPhotoBtn"> Add Photo </Button>
                    <Button className="sndMailBtn"> Send Mail </Button>
                </Card.Footer>
            </Card>
               ) 
            })
           
        }
    </>
   );
}

export default ShortProfileCrad;