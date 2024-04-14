import './App.css';
import Header from './pages/header/header';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import NoMatch from './pages/noMatch/noMatch';
import CargarEmpleados from './pages/empleados/cargarEmpleados';
import UpdateUser from './pages/empleados/editarEmpleado';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/empleados' element={<CargarEmpleados/>} />
        <Route path='/empleados/:id' element={<UpdateUser/>} />
        <Route path='*' element={<NoMatch/>} />
      </Routes>
    </>

  );
}

export default App;
