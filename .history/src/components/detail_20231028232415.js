import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import image from '../images/poke_fondo2.png';
import { useParams } from 'react-router-dom';
import fetchData from '../api/poke_api';

function PokeDetails() {

  let {pokename} = useParams();
  defaultData = {'abilities': [], 'name': '', 'types': []};
  const [poke, setPoke] = useState();
  console.log("asldjflaskdjf");
  console.log({pokename});
  var name = {pokename}.pokename;

  useEffect(() => {
    const getPoke = async (value) => {
      try {
        console.log(value);
        const jsonData = await fetchData(value);
        console.log(jsonData);
        setPoke(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    getPoke({pokename}.pokename);
  }, []);

  console.log(poke);
  return (
    <Container style={{backgroundImage: `url(${image})`}}>
      <Row>
        <Col xs={8} style={{ width: '18rem' }}>
          <Card.Img variant="top" width="200" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        
          
        </Col>
        <Col xs={4} >
          <h1>{name}</h1>
          <img 
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="new"
          />
        </Col>
        
      </Row>
    </Container>
    );
}

export default PokeDetails;