import React from 'react';
import {Card, CardHeader, CardBody, ListGroup, ListGroupItem } from 'reactstrap';

const CharacterCard = (props) => {

  return( 
    <Card color='info'>
     <CardHeader>Name: {props.name}</CardHeader>
     <CardBody>
       <ListGroup>
         <ListGroupItem>Height: {props.height}</ListGroupItem>
         <ListGroupItem>Mass: {props.mass}</ListGroupItem>
         <ListGroupItem>Homeworld: {props.homeworld}</ListGroupItem>
       </ListGroup>

     </CardBody>
    </Card>

  );
};

export default CharacterCard;