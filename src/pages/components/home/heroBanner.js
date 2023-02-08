import React, { useState } from "react";
import { Container, Button, Row, Form, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BsDash } from 'react-icons/bs';


const gender = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
]

const Interest = [
    { value: 'Sports & Adventure', label: 'Sports & Adventure' },
    { value: 'Movies & Entertainment', label: 'Movies & Entertainment' },
    { value: 'Arts & Science', label: 'Arts & Science' },
    { value: 'Technology', label: 'Technology' },
    { value: 'Fashion', label: 'Fashion' }
]

const status = [
    { value: 'Single', label: 'Single' },
    { value: 'Married', label: 'Married' },
    { value: 'In a Relationship', label: 'In a Relationship' },
    { value: 'Its Complicated', label: 'Its Complicated' }
]

const state = [
    {value: 'andhra Pradesh', label:' Andhra Pradesh' },
    {value: 'Andaman and Nicobar Islands', label:'Andaman and Nicobar Islands'},
    {value: 'Arunachal Pradesh', label:'Arunachal Pradesh'},
    {value: 'Assam', label:'Assam'},
    {value: 'Bihar', label:'Bihar'},
    {value: 'Chandigarh', label:'Chandigarh'},
    {value: 'Chhattisgarh', label:'Chhattisgarh'},
    {value: 'Dadar and Nagar Haveli', label:'Dadar and Nagar Haveli'},
    {value: 'Daman and Diu', label:'Daman and Diu'},
    {value: 'Delhi', label:'Delhi'},
    {value: 'Lakshadweep', label:'Lakshadweep'},
    {value: 'Puducherry', label:'Puducherry'},
    {value: 'Goa', label:'Goa'},
    {value: 'Gujarat', label:'Gujarat'},
    {value: 'Haryana', label:'Haryana'},
    {value: 'Himachal Pradesh', label:'Himachal Pradesh'},
    {value: 'Jammu and Kashmir', label:'Jammu and Kashmir'},
    {value: 'Jharkhand', label:'Jharkhand'},
    {value: 'Karnataka', label:'Karnataka'},
    {value: 'Kerala', label:'Kerala'},
    {value: 'Madhya Pradesh', label:'Madhya Pradesh'},
    {value: 'Maharashtra', label:'Maharashtra'},
    {value: 'Manipur', label:'Manipur'},
    {value: 'Meghalaya', label:'Meghalaya'},
    {value: 'Mizoram', label:'Mizoram'},
    {value: 'Nagaland', label:'Nagaland'},
    {value: 'Odisha', label:'Odisha'},
    {value: 'Punjab', label:'Punjab'},
    {value: 'Rajasthan', label:'Rajasthan'},
    {value: 'Sikkim', label:'Sikkim'},
    {value: 'Tamil Nadu', label:'Tamil Nadu'},
    {value: 'Telangana', label:'Telangana'},
    {value: 'Tripura', label:'Tripura'},
    {value: 'Uttar Pradesh', label:'Uttar Pradesh'},
    {value: 'Uttarakhand', label:'Uttarakhand'},
    {value: 'West Bengal', label:'West Bengal'},    
]



const HeroBanner = () => {
    const navigate = useNavigate();

    const navigateSignUp = () => {
        navigate('/signUp');
    };

    const navigateMatches = () => {
        navigate('/matches');
    };

    return (
        <>
            <div className="banner">
                <Container className="bannerContainer">
                    <div className="banner_info">
                        <h2>Millions of verified Members</h2>
                        <Button variant="primary" className="createprofileBtn" onClick={navigateSignUp} >
                            Create your Profile
                        </Button>
                    </div>
                </Container>
                <div className="banner_info_form">
                    <Container>
                        <Form>
                            <Row className="mb-3 align-items-end ">
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label> I am looking for </Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option selected > Select Gender</option>
                                        {gender.map((item, i) => {
                                            return <option key={i} value={item.value}>{item.label}</option>
                                        })}
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label> Located In </Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option selected >Select State</option>
                                        {state.map((item, i) => {
                                            return <option key={i} value={item.value}>{item.label}</option>
                                        })}
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label> Interested In </Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Select Interest</option>
                                        {Interest.map((item, i) => {
                                            return <option key={i} value={item.value}>{item.label}</option>
                                        })}
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCity" className="ageBox-filter">
                                    <Form.Label>Age </Form.Label>
                                    <Row className="align-items-center">
                                        <Col>
                                            <Form.Control type="text" placeholder="From" />
                                        </Col>
                                        <BsDash/>
                                        <Col>
                                            <Form.Control type="text" placeholder="To" />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label> Status </Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option> Select Status </option>
                                        {status.map((item, i) => {
                                            return <option key={i} value={item.value}>{item.label}</option>
                                        })} 
                                    </Form.Select>
                                </Form.Group>
                                <Col>
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        className="submitBtnBanner"
                                        onClick={navigateMatches}
                                    >
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default HeroBanner;
