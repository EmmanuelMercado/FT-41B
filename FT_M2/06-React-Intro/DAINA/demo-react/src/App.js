import './App.css';
import Title from './components/Title'
import Alumnos from './components/Alumnos'
import Boton from './components/Boton'
import Boton2 from './components/Boton2'
function App() {
  const alumnos =[
    {name: 'Emmanuel',age:23},
    {name: 'Carmen',age:23},
    {name: 'Camila',age:29},
    {name: 'Camilo',age:26},
    {name: 'Gregori',age:40},
    {name: 'Samuel',age:28},
  ]
  return (
    <div>
      <Title/>
      <Alumnos alumnos={alumnos} cohorte={"FT 41B"} totalAlumnos='400'/>
      <Boton texto='Esto es un boton'/>
      <Boton2 texto='Boton con clase'/>
    </div>
  );
}

export default App;
