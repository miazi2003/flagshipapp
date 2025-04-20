import React from 'react';
import './App.css';
import { Outlet } from 'react-router';

const App = () => {
  return (
    <div>
      <nav>nav</nav>
      <Outlet></Outlet>
      <footer>foot</footer>
    </div>
  );
};

export default App;