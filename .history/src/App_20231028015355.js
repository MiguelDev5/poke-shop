import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fetchData from './api/poke_api';
import PokeGrid from './components/body';
import PokeTitle from './components/title';
import PokePagination from './components/pagination';
import { Col, Container } from 'react-bootstrap';
import image from '../images/poke_fondo2.png';

const App = () => {
  const [data, setData] = useState({'results': [{'name': 'no'}]});

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonData = await fetchData();
        console.log(jsonData);
        setData(jsonData);
      } catch (error) {
        console.log("--------------->");
        console.error(error);
      }
    };

    getData();
  }, []);

  return (

    <Container style={{backgroundImage: `url(${image})`}}>
      <Col>
        <PokeTitle/>
        <PokeGrid data={data} />
        <PokePagination/>
      </Col>
    </Container>
  );
};

export default App;
