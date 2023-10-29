import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import image from '../images/poke_fondo2.png';
import { useParams } from 'react-router-dom';
import fetchData from '../api/get_poke';

function PokeDetails() {

  let {pokename} = useParams();
  var defaultData = {'id': 0, 'abilities': [], 'name': '', 'types': [], 'height': 0, 'width': 0, 'sprites': [], 'stats': []};
  const [poke, setPoke] = useState(defaultData);
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

  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  console.log(poke.name);
  console.log(poke.abilities);
  console.log(poke.types);
  console.log(poke.height);
  console.log(poke.weight);
  console.log(poke.sprites);
  console.log(poke.stats);
  console.log(poke.id);
  
  return (
    <Container style={{backgroundImage: `url(${image})`}}>
      <Row>
        <Col xs={10} style={{ width: '18rem' }}>
          <Card.Img variant="top" width="200" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <h1>Tipo pokemon</h1>
          <ListGroup className="list-group-flush">
            {poke.abilities.map((elemento, index) => (
              <ListGroup.Item>{elemento.types.name}</ListGroup.Item>
            ))}
          </ListGroup>
          <h1>Lista de habilidades</h1>
          <ListGroup className="list-group-flush">
            {poke.abilities.map((elemento, index) => (
              <ListGroup.Item>{elemento.ability.name}</ListGroup.Item>
            ))}
          </ListGroup>
        
          
        </Col>
        <Col xs={4}  >
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