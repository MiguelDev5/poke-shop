import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';

const PokeGrid = (props) => {
    if (props!= null) {
        return <div>Renderizado si la condición es verdadera {props.data['results'][0]['name']}</div>;
      } else {
        return <div>Renderizado si la condición es falsa</div>;
      }
    return (
        <Container>

            <Row>
                
                { (props != null)?<h1></h1>: <h1>'no'</h1>}

                 {
                
                // props.data['results'].map((elemento, index) => (
                //     <Col xxl={2} xl={2} lg={2} md={4} xs={6} >
                //         <Alert key="{elemento['name']}" variant='primary'>
                //             {elemento['name']}  
                //         </Alert>
                //     </Col>
                // ))
                // 
            } 
                
                    <Col xxl={2} xl={2} lg={2} md={4} xs={6} >
                        <Alert key="{elemento['name']}" variant='primary'>
                            asdf
                        </Alert>
                    </Col>
                
            </Row>
        </Container>
    );
}

export default PokeGrid;