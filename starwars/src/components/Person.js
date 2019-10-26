import React, {useState} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Collapse, CardWrapper,
  } from 'reactstrap';

  const Person = props => {
    const [collapse, setCollapse] = useState(false);
    
    const toggle = () => setCollapse(!collapse);
    console.log(props.props.data.results);


    return (
      props.props.data.results.map((item) => {
        return (
            <div className="title">
              <Button color="info" onClick={toggle} style={{ marginBottom: '1rem' }}>Info</Button>
              <Collapse isOpen={collapse}>
                <CardBody>
                <CardTitle>Name: {item.name}</CardTitle>
                <CardSubtitle>Height: {item.height}</CardSubtitle>
                <a href={item.url}><Button color='primary'>{item.name}</Button></a>
                </CardBody>
                </Collapse>
            </div> 
          );
    })
    )
  }

  export default Person;