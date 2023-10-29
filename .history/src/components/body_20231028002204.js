import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';

function PokeGrid (props) {
    console.log(props);
    // try {
    //     if ('results' in props.results) {
    //         return <div>Renderizado si la condición es verdadera </div>;
    //       } else {
    //         return <div>Renderizado si la condición es falsa</div>;
    //       }
    // } catch (error) {
    //     console.error(error);
    // }
    
    return (
        <Container>

            <Row>
                
                
                
                
                        <Col xxl={2} xl={2} lg={2} md={4} xs={6} >
                         <Alert key="{elemento['name']}" variant='primary'>
                             {props['results'][0].name}
                         </Alert>
                     </Col>
                
             
                
                
                
            </Row>
        </Container>
    );
}

export default PokeGrid;