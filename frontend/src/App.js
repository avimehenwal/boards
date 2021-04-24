import './App.css';
import 'antd/dist/antd.css';
import { Header } from './component/Header'
import { FamilyList } from './component/FamilyList'

function App() {
  return (
    <div className="App">
      <Header text="My awesome app" />
      <FamilyList />
    </div>
  );
}

export default App;
