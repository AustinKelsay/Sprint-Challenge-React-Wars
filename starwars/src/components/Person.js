import React, {useState} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Collapse, CardWrapper,
  } from 'reactstrap';

  const Person = props => {
    const [collapse, setCollapse] = useState(false);
    console.log(props.props.data.results);

    return (
      props.props.data.results.map((item) => {

        const toggle = () => setCollapse(!collapse);

        return (
            <div className="title">
                <CardBody>
                <CardTitle>Name: {item.name}</CardTitle>
                <CardSubtitle>Gender: {item.gender}</CardSubtitle>
                <CardSubtitle>Height: {item.height}</CardSubtitle>
                <CardSubtitle>Eye Color: {item.eye_color}</CardSubtitle>
                <CardText><a href={item.url}>{item.url}</a></CardText>
                </CardBody>
            </div> 
          );
    })
    )
  }

  export default Person;