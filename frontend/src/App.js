import React, { useReducer } from 'react'
import './App.css';
import 'antd/dist/antd.css';
import { Header } from './component/Header'
import { FamilyList } from './component/FamilyList'

let infoModel = {
  stage: 0
}

export const Gstates = React.createContext(infoModel);

const initialState = 0
// Reducer Fn
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'decrement':
      return state - 1
    default:
      console.log('No case matched')
  }
}

export const CountContext = React.createContext();

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        <Header text="My awesome app" stage={count} />
        <div id="main">
          <FamilyList />
        </div>
      </CountContext.Provider>
    </div>
  );
}

export default App;
