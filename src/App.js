import React, {Fragment} from 'react';
import Header from './components/Header';
import Compare from './components/Compare';
import Footer from './components/Footer';
import { Container } from 'reactstrap';
import 'bootswatch/dist/solar/bootstrap.css';

function App() {
  return (
      <Fragment>
        <Header />
        <Container>
          <Compare />
        </Container>
        <Footer />
      </Fragment>
  );
}

export default App;
