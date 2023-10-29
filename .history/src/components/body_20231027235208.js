import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Alert} from 'react-bootstrap';

const PokeGrid = (data) => {
  return (
    <Container>

        <Row>
            {console.log(props)}
            {/* {
                
                props.data['results'].map((elemento, index) => (
                    <Col xxl={2} xl={2} lg={2} md={4} xs={6} >
                        <Alert key="{elemento['name']}" variant='primary'>
                            {elemento['name']}  
                        </Alert>
                    </Col>
                ))
            } */}
             {
                <Col xxl={2} xl={2} lg={2} md={4} xs={6} >
                    <Alert key="{elemento['name']}" variant='primary'>
                        {data.data['results'][0]['name']}  
                    </Alert>
                </Col>
             }    
        </Row>
    </Container>
  );
}

export default PokeGrid;