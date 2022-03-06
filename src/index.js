import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {Navbar} from './components/index';

const App = () => {
  return (
    <div id="App">
        <Navbar />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);