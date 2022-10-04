import { useState } from 'react';
import {Link} from 'react-router-dom';
import Alerta from '../components/Alerta';
import clienteAxios from '../config/axios';
const olvidePassword = () => {
  const [email, setEmail] = useState('')
  const [alerta, setAlerta] = useState({})

  const handleSubmit = async e => {
    e.preventDefault()
    if (email === '' || email.length<6){
      setAlerta({msg:'Aun no ingresas el correo', error:true})
      return 
    }
    try {
      const {data} = await clienteAxios.post('/MEDICOS/olvide-password', {email})
      setAlerta({msg: data.msg})
    } catch (error) {
      setAlerta ({
        msg: error.response.data.msg,
        error:true
      })
    }
  }
  const {msg} = alerta
    return (
      <>
        <section className="form-section p-3">
        <div className="auth-wrapper form-login">
        <h2 className="font-semibold color-title">Olvidaste Contraseña</h2>
        <form  className="flex flex-col" onSubmit={handleSubmit}>

          <div className="flex flex-col border my-4">
            <input className="input-not" type="email"  value={email} onChange={e=> setEmail(e.target.value)} placeholder="Correo"/>
          </div>
          {msg && <Alerta alerta= {alerta}/>}
          <div className="flex flex-col my-4">
            <input type="submit"  value="Solicitar" className=" color-blue-new font-semibold p-4 text-white hover:cursor-pointer hover:color-blue-hover m-5" />
          </div>
          
        </form>
        <div className='flex flex-col'>
          <Link className="text-center color-title" to="/">¿Ya tienes una cuenta? Iniciar Sesión</Link>
          <Link className="text-center color-title" to="/registrar">¿No tienes cuenta? Regístrate</Link>
        </div>
       </div>
    </section>
      </>
    )
  }
  
  export default olvidePassword