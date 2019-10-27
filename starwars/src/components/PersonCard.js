import React, {useState} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Collapse, CardWrapper,
  } from 'reactstrap';

const PersonCard = props => {
    return (
        <div className="title">
            <CardBody>
            <CardTitle>Name: {props.name}</CardTitle>
            <CardSubtitle>Gender: {props.gender}</CardSubtitle>
            <CardSubtitle>Height: {props.height}</CardSubtitle>
            <CardSubtitle>Eye Color: {props.eye_color}</CardSubtitle>
            <CardText><a href={props.url}>{props.url}</a></CardText>
            </CardBody>
        </div> 
      );
 }

 export default PersonCard;