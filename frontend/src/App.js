import React, { useReducer } from 'react'
import './App.css';
import 'antd/dist/antd.css';
import { Header } from './component/Header'
import { FamilyList } from './component/FamilyList'
import { CaregiverList } from './component/CaregiverList'

let AppDB = {
  stage: 1      // control Main Views
}

function reducerFn(state, action) {
  switch (action.type) {
    case 'NEXT':
      state['stage'] += 1
      return { ...state };
    case 'PREVIOUS':
      state['stage'] -= 1
      return { ...state };
    case 'RESET':
      state['stage'] = AppDB['stage']
      return { ...state };
    default:
      console.log('No case matched')
  }
}

export const StateContext = React.createContext();

const SelectView = ({ stage }) => (
  <div>
    {(stage === 1) ? <FamilyList /> : <CaregiverList />}
  </div>
)

function App() {
  const [state, dispatch] = useReducer(reducerFn, AppDB);
  console.log(state['stage']);

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
