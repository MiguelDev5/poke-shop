import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';

const PokeGrid = (props) => {
    if (props!= null) {
        return <div>Renderizado si la condición es verdadera {props['results'][0]['name']}</div>;
      } else {
        return <div>Renderizado si la condición es falsa</div>;
      }
    // return (
    //     <Container>

    //         <Row>
                
                
                
    //             props.data['results'].map((elemento, index) => (
    //                     <Col xxl={2} xl={2} lg={2} md={4} xs={6} >
    //                      <Alert key="{elemento['name']}" variant='primary'>
    //                          {elemento['name']}  
    //                      </Alert>
    //                  </Col>
    //             ))
                
             
                
                
                
    //         </Row>
    //     </Container>
    // );
}

export default PokeGrid;