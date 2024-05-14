import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Herosection from './Herosection';
import Cardsection from './Cardsection';
import Footer from './Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Herosection />
      <Cardsection />
      <Footer />
    </div>
  );
}

export default App;