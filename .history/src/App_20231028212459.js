import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fetchData from './api/poke_api';
import PokeGrid from './components/body';
import PokeTitle from './components/title';
import PokePagination from './components/pagination';
import { Col, Container } from 'react-bootstrap';
import image from './images/poke_fondo.jpg';

const App = () => {
  const [data, setData] = useState({'results': [{'name': 'no'}]});
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const getData = async (value) => {
      try {
        console.log(value);
        const jsonData = await fetchData();
        console.log(jsonData);
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    getData(1);
  }, []);

  return (

    <Container style={{backgroundImage: `url(${image})`}}>
      <Col>
        <PokeTitle/>
        <PokeGrid data={data} />
        <PokePagination setCurrent={setCurrent} current={current}/>
      </Col>
    </Container>
  );
};

export default App;
