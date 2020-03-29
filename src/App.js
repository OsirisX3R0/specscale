import React from 'react';
import Header from './components/Header';
import Compare from './components/Compare';
import Footer from './components/Footer';
import { Container } from 'reactstrap';
import { GlobalProvider } from './context/GlobalContext';
import './App.scss';

const App = () => {
  return (
      <GlobalProvider>
        <Header />
        <Container>
          <Compare />
        </Container>
        <Footer />
      </GlobalProvider>
  );
}

export default App;
