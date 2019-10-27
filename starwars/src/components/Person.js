import React, {useState} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Collapse, CardWrapper,
  } from 'reactstrap';
  import PersonCard from './PersonCard';;

  const Person = props => {
    const [collapse, setCollapse] = useState(false);
    console.log(props.props.data.results);

    return (
      props.props.data.results.map((item) => {
       return <PersonCard name={item.name} gender={item.gender} height={item.height} eye_color={item.eye_color}/>
        
      })
     )
  }

  export default Person;