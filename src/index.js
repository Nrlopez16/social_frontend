import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import {
  Navbar,
  MainBody
} from './components/index';

const App = () => {
  return (
    <div id="App">
        <Navbar />
        <MainBody />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);