
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Profile from './components/Profile/Profile.jsx'
import Person from './components/Person/Person';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/profile' element={<Profile/>}>
          </Route>
          <Route path='/person' element={<Person/>}/>
        </Routes>
    </div>
  );
}

export default App;
