import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Alerta from '../components/Alerta';
import useAuth from '../hooks/useAuth';
import clienteAxios from '../config/axios';
//import App from './calendar';
const logins = () => {
  const[email, setEmail]= useState('')
  const[password, setPassword]= useState('')
  const[alerta, setAlerta]= useState({})

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ([email, password].includes('')){
      setAlerta ({
        msg:'todos los campos son obligatorios',
        error:true,
      })
    }
    try {
      const {data} = await clienteAxios.post('MEDICOS/login', {email, password})
      //mi amigo localStorage ajajjajaa
      localStorage.setItem('token', data.token)
      console.log('hola',data)
      navigate('/admin')
    } catch (error) {
      setAlerta ({
        msg:error.response.data.msg,
        error:true
      })
    }
  }

  const {msg} = alerta
  return (
    <>
    <section className="form-section">
      <div className="auth-wrapper">
        <h2 className="font-semibold"> Welcome to Cliniva </h2>
        <p>
          <Link to="/registrar">No tienes Cuenta? Registrar</Link>
        </p>
        <h2 className="font-bold">Sign in</h2>
        <form  className="flex flex-col" onSubmit={handleSubmit}>

          <div className="flex flex-col border my-4">
            <label htmlFor="">Correo</label>
            <input type="email"  placeholder="Correo" value={email} onChange={e => setEmail(e.target.value)}/>
          </div>


          <div className="flex flex-col border my-4">
            <label htmlFor="">Password</label>
            <input type="password"  placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <div>
            {/*alerta */}
          {msg && <Alerta alerta= {alerta}/>} 
          </div>
          <div className="flex flex-col border my-4">
            <input type="submit"  value="Iniciar Sesión" className="bg-indigo-700 font-semibold py-3 text-white hover:cursor-pointer hover:bg-indigo-800" />
          </div>
          
        </form>
        <p><Link to="/olvidepassword">Olvidaste la contraseña</Link></p>
      </div>
    </section>
    {/*<App />*/}

    </>
  )
}

export default logins