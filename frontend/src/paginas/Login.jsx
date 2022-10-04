import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Alerta from '../components/Alerta';
import useAuth from '../hooks/useAuth';
import clienteAxios from '../config/axios';

const logins = () => {
  const[email, setEmail]= useState('')
  const[password, setPassword]= useState('')
  const[alerta, setAlerta]= useState({})
  const {setAuth} = useAuth()

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
      const {nombre} = data
      setAuth(data)
      localStorage.setItem('nombre', data.nombre)

      console.log("erfewtfwjg", data)
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
    <section className="form-section p-3">
      <div className="auth-wrapper form-login">
        <h2 className="font-semibold color-title"> Bienvenidos </h2>
        <p>
          <Link className="color-title" to="/registrar">Crear Nuevo Administrador</Link>
        </p>
        <h2 className="font-bold">Iniciar Sesión</h2>
        <form  className="flex flex-col" onSubmit={handleSubmit}>

          <div className="flex flex-col border my-4">
            <input className='input-not' type="email"  placeholder="Correo" value={email} onChange={e => setEmail(e.target.value)}/>
          </div>


          <div className="flex flex-col border my-4">
            <input className='input-not' type="password"  placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <div>
            {/*alerta */}
          {msg && <Alerta alerta= {alerta}/>} 
          </div>
          <div className="flex flex-col my-4">
            <input type="submit"  value="Iniciar Sesión" className="color-blue-new font-semibold py-3 text-white hover:cursor-pointer hover:color-blue-hover" />
          </div>
          
        </form>
        <p className='color-title'><Link to="/olvidepassword">¿Olvidaste la contraseña?</Link></p>
      </div>
    </section>

    </>
  )
}

export default logins