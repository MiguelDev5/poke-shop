import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fetchData from './api/poke_api';
import PokeGrid from './components/body';
import PokeTitle from './components/title';
import PokePagination from './components/pagination';
import { Col } from 'react-bootstrap';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>

const App = () => {
  const [data, setData] = useState(null);

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
    <div>
      <Col>
        <PokeTitle/>
        <PokeGrid data={data}/>
        <PokePagination/>
      </Col>
    </div>
  );
};

export default App;
