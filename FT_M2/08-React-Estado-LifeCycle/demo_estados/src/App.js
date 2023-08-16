import logo from './logo.svg';
import './App.css';
import Contador from './components/Contador/Contador';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <div className="App">
    <Contador/>  
    <hr></hr>
    <Counter/>  
    </div>
  );
}

export default App;
