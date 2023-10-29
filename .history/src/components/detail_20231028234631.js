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
          
          <Card.Body>
            <Card.Title>Peso</Card.Title>
            <h1>Peso</h1>
          <ListGroup className="list-group-flush">
            
            <ListGroup.Item>{poke.weight}</ListGroup.Item>
            
          </ListGroup>
          </Card.Body>

          <h1>Tipo pokemon</h1>
          <ListGroup className="list-group-flush">
            {poke.types.map((elemento, index) => (
              <ListGroup.Item>{elemento.type.name}</ListGroup.Item>
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
          <Card.Img variant="top" width="200" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" />
        </Col>
        
      </Row>
    </Container>
    );
}

export default PokeDetails;