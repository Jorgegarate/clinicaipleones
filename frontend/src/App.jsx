import {BrowserRouter, Routes, Route} from 'react-router-dom';
//layout login
import AuthLayout from './layout/AuthLayout';
//layoud dashboard
import RutaProtegida from './layout/RutaProtegida';

//paginas publicas
import Login from './paginas/Login';
import Registrar from './paginas/Registrar';
import OlvidePassword from './paginas/OlvidePassword';
import ConfirmarCuenta from './paginas/ConfirmarCuenta';
import NuevoPassword from './paginas/NuevoPassword';

//paginas privadas
import AdministrarPacientes from './paginas/AdministrarPacientes';

import { AuthProvider } from './contex/AuthProvider';
function App() {
  return (
    <BrowserRouter>
        <AuthProvider>
            <Routes>
              {/*Rutas publicas*/}
                <Route path="/" element={<AuthLayout/>}>
                    <Route index element={<Login/>}/>
                    <Route path="registrar" element={<Registrar/>}/>
                    <Route path="olvidepassword" element={<OlvidePassword/>}/>
                    <Route path="olvidepassword/:token" element={<NuevoPassword/>}/>
                    <Route path="confirmarcuenta/:id" element={<ConfirmarCuenta/>}/>
                </Route>
                {/*Rutas privadas */}
                <Route path='/admin' element={<RutaProtegida/>}>
                    <Route index element={<AdministrarPacientes/>}/>
                </Route>
            </Routes>
        </AuthProvider>
    </BrowserRouter>
  )
}

export default App
