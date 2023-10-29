import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fetchData from './api/poke_api';
import PokeGrid from './components/body';
import PokeTitle from './components/title';
import PokePagination from './components/pagination';
data={data}
import { Col } from 'react-bootstrap';


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
    <Switch>
      <Route exact path="/" component={PokeTitle} />
      <Route path="/acerca-de" component={PokeGrid} />
      <Route path="/contacto" component={PokePagination} />
    </Switch>
    // <div>
    //   <Col>
    //     <PokeTitle/>
    //     <PokeGrid data={data} />
    //     <PokePagination/>
    //   </Col>
    // </div>
  );
};

export default App;
