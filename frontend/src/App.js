import React from 'react'
import './App.css';
import 'antd/dist/antd.css';
import { BoardsApp } from './BoardsApp'
import { BoardAppState } from './ContextStore/BoardState'

function App() {
  return (
    <BoardAppState>
      <div className="App">
        <BoardsApp />
      </div>
    </BoardAppState>
  );
}

export default App;
