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
  console.log(poke.sprites);
  console.log(poke.stats);
  console.log(poke.id);

  const rowStyle = {
      textDecoration: "none",
      color: 'black',
  };

  const dataStyle = {
    textDecoration: "none",
    color: 'white',
};
  
  return (
    <Container style={{backgroundImage: `url(${image})`}}>
      <Row style={rowStyle}>
        <h1>{poke.id} - {poke.name}</h1>
      </Row>
      <Row>
        <Col xs={4} style={{ width: '18rem' }}>
          
          <h3 style={dataStyle}>Altura</h3>
          <ListGroup className="list-group-flush" >
            <ListGroup.Item>{poke.height}</ListGroup.Item>
          </ListGroup>
            
          <h3>Peso</h3>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{poke.weight}</ListGroup.Item>
          </ListGroup>

          <h3>Tipo pokemon</h3>
          <ListGroup className="list-group-flush">
            {poke.types.map((elemento, index) => (
              <ListGroup.Item>{elemento.type.name}</ListGroup.Item>
            ))}
          </ListGroup>

          <h3>Lista de habilidades</h3>
          <ListGroup className="list-group-flush">
            {poke.abilities.map((elemento, index) => (
              <ListGroup.Item>{elemento.ability.name}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        <Col xs={4}  >
          <h3>Lista de habilidades</h3>
          <ListGroup className="list-group-flush">
            {poke.stats.map((elemento, index) => (
              <ListGroup.Item>{elemento.stat.name}: {elemento.base_stat}</ListGroup.Item>
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