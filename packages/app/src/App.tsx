import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@todocomponentcode/components';

const App:React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
            count {count}
          <Button onClick={() => setCount(count+1)} />
          </div>
      </header>
    </div>
  );
}

export default App;
