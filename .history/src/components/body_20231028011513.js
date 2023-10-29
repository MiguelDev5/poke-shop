import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

const PokeGrid = (props) => {
  
    return (
        <Container>
            <Row>
                {props.data['results'].map((elemento, index) => (
                        <Col xxl={2} xl={2} lg={2} md={4} xs={6} >
                            <Link to="details">
                                <Alert key="{elemento['name']}" variant='primary'>
                                    {elemento['name']}  
                                </Alert>
                            </Link>
                     </Col>
                ))}                
            </Row>
        </Container>
    );
}

export default PokeGrid;