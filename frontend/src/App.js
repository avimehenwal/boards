import './App.css';
import 'antd/dist/antd.css';
import { BoardsApp } from './BoardsApp'
import { AppState } from './BoardsApp/ContextStore/BoardState'

function App() {
  return (
    <div className="App">
      <AppState>
        <BoardsApp />
      </AppState>
    </div>
  );
}

export default App;
