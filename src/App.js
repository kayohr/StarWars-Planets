import React from 'react';
import './App.css';
import Home from './page/Home';
import PlanetsProvider from './tests/context/PlanetsProvider';
// import Table from './tests/componentes/Table';

function App() {
  return (
    <PlanetsProvider>

      <Home />
    </PlanetsProvider>
  );
}

export default App;
