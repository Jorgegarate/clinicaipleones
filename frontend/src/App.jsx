import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import Login from './paginas/Login';
import Registrar from './paginas/Registrar';
import OlvidePassword from './paginas/OlvidePassword';
import ConfirmarCuenta from './paginas/ConfirmarCuenta';
import NuevoPassword from './paginas/NuevoPassword';

import { AuthProvider } from './contex/AuthProvider';
function App() {
  return (
    <BrowserRouter>
        <AuthProvider>
            <Routes>
                <Route path="/" element={<AuthLayout/>}>
                    <Route index element={<Login/>}/>
                    <Route path="registrar" element={<Registrar/>}/>
                    <Route path="olvidepassword" element={<OlvidePassword/>}/>
                    <Route path="olvidepassword/:token" element={<NuevoPassword/>}/>
                    <Route path="confirmarcuenta/:id" element={<ConfirmarCuenta/>}/>
                </Route>
            </Routes>
        </AuthProvider>
    </BrowserRouter>
  )
}

export default App
