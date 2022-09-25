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
          <section className="form-section">
      <div className="auth-wrapper">
        <h2 className="font-semibold">Olvidaste Contraseña</h2>
        <form  className="flex flex-col" onSubmit={handleSubmit}>

          <div className="flex flex-col border my-4">
            <label htmlFor="">Correo</label>
            <input type="email"  value={email} onChange={e=> setEmail(e.target.value)} placeholder="Correo"/>
          </div>
          {msg && <Alerta alerta= {alerta}/>}
          <div className="flex flex-col border my-4">
            <input type="submit"  value="Iniciar Sesión" className="bg-indigo-700 font-semibold py-3 text-white hover:cursor-pointer hover:bg-indigo-800" />
          </div>
          
        </form>
        <div className='flex-auto gap-4'>
          <Link className="flex-none w-14 h-14" to="/">¿Ya tienes una cuenta? Iniciar Sesión</Link>
          <Link className="flex-none w-14 h-14" to="/olvidepassword">¿No tienes cuenta ?registrate</Link>
        </div>
       </div>
    </section>
      </>
    )
  }
  
  export default olvidePassword