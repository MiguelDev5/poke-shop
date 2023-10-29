import { Container } from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import { Col, Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import image from '../images/poke_fondo2.png';
import { useParams } from 'react-router-dom';
import fetchData from '../api/poke_api';

function PokeDetails(props) {
  let {pokename} = useParams();
  console.log("asldjflaskdjf");
  console.log({pokename});

  const getPoke = async (value) => {
    try {
      console.log(value);
      const jsonData = await fetchData(value);
      console.log(jsonData);
      props.setData(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  getPoke({pokename});

  return (
    <Container style={{backgroundImage: `url(${image})`}}>
      <Row>
        <Col xs={8} style={{ width: '18rem' }}>
          <Card.Img variant="top" width="200" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
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
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
          
        </Col>
        <Col xs={4} >
          <h1>Card Title</h1>
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