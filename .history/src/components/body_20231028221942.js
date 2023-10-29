import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

const PokeGrid = (props) => {
    const linkStyle = {
        textDecoration: "none",
        color: 'blue'
    };

    return (
        <Container>
            <Row>
                {props.data['results'].map((elemento, index) => (
                    let const newLink = 'details' + elemento['name'];
                    <Col xxl={2} xl={2} lg={2} md={4} xs={6} >
                        <Link to={newLink} style={linkStyle} params={{ testvalue: "hello" }}>
                            <Alert key={elemento['name']} variant='primary'>
                                {elemento['name']}  
                            </Alert>
                        </Link>
                    </Col>
                ))}        
                <Outlet />        
            </Row>
        </Container>
    );
}

export default PokeGrid;