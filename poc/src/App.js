import React, { useReducer } from 'react'
import './App.css';
import 'antd/dist/antd.css';
import { Header } from './component/Header'
import { FamilyList } from './component/FamilyList'
import { CaregiverList } from './component/CaregiverList'
import { reducerFn, AppDB } from './reducerFunction'

export const StateContext = React.createContext();

const SelectView = ({ stage }) => (
  <div>
    {(stage === 1) ? <FamilyList /> : <CaregiverList />}
  </div>
)

function App() {
  const [state, dispatch] = useReducer(reducerFn, AppDB);
  // console.dir(state);

  return (
    <div className="App">
      <StateContext.Provider value={{ State: state, stateDispatch: dispatch }}>
        <Header text="My awesome app" stage={state['stage']} />
        <div id="main">
          <SelectView stage={state['stage']} />
        </div>
      </StateContext.Provider>
    </div>
  );
}

export default App;
