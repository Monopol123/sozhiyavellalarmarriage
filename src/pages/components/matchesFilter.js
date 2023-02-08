import React from "react";
import {ListGroup, Card}  from 'react-bootstrap';

function MatchesFilter() {
  return (
    <>
         <Card>
            <Card.Header> Show Profiles Created </Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item> within a week (2) </ListGroup.Item>
                <ListGroup.Item> within a month (4) </ListGroup.Item>
            </ListGroup>
        </Card>

        <Card>
            <Card.Header> Profile type </Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item> with Photo (3) </ListGroup.Item>
            </ListGroup>
        </Card>

        <Card>
            <Card.Header> Marital Status </Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item> Unmarried (2)</ListGroup.Item>
            </ListGroup>
        </Card>

        <Card>
            <Card.Header> Mother Tongue </Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item> English </ListGroup.Item>
            </ListGroup>
        </Card>

        <Card>
            <Card.Header> Education </Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item> Bachelors-Engineering</ListGroup.Item>
                <ListGroup.Item>Masters-Engineering  </ListGroup.Item>
            </ListGroup>
        </Card>

        <Card>
            <Card.Header> Occupation </Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item> Engineer-Non IT (2)</ListGroup.Item>
                <ListGroup.Item>Software Professional (3) </ListGroup.Item>
            </ListGroup>
        </Card>

        <Card>
            <Card.Header>Physical Status</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item> Normal (2) </ListGroup.Item>
            </ListGroup>
        </Card>

        <Card>
            <Card.Header> Eating Habits </Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item> Non Vegetarian (3)</ListGroup.Item>
                <ListGroup.Item> Vegetarian (2) </ListGroup.Item>
            </ListGroup>
        </Card>

        <Card>
            <Card.Header> Smoking </Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>Not Specified (3)</ListGroup.Item>
            </ListGroup>
        </Card>

        <Card>
            <Card.Header> Drinking </Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item> Not Specified (3)</ListGroup.Item>
                <ListGroup.Item> Never Drinks (3) </ListGroup.Item>
            </ListGroup>
        </Card>

        <Card>
            <Card.Header> Profile Created by </Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item> Self (1) </ListGroup.Item>
            </ListGroup>
        </Card>
    </>
  );
}

export default MatchesFilter;