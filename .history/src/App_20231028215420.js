import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fetchData from './api/poke_api_range';
import PokeGrid from './components/body';
import PokeTitle from './components/title';
import PokePagination from './components/pagination';
import { Col, Container } from 'react-bootstrap';
import image from './images/poke_fondo.jpg';

const App = () => {
  const [data, setData] = useState({'results': [{'name': 'no'}]});
  const [current, setCurrent] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


  useEffect(() => {
    const getData = async (value) => {
      try {
        console.log(value);
        const jsonData = await fetchData(value);
        console.log(jsonData);
        setData(jsonData);
        setTotalPages(parseInt(jsonData['count']/48, 10))
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
        <PokePagination totalPages={totalPages} data={data} setData={setData}/>
      </Col>
    </Container>
  );
};

export default App;
