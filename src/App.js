import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <div className="container">
        <form>
          <input type="text"
          placeholder="Add a tast..."
          value={inputValue}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

export default App;
