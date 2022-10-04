
import {useState} from 'react';
import {Link} from 'react-router-dom';
import Alerta from '../components/Alerta';
import clienteAxios from '../config/axios';
const registrar = () => {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repetirPassword, setRepetirPassword] = useState('')
  const [alerta, setAlerta] = useState({})

  const handleSumit = async e => {
    e.preventDefault();
    
    if ([nombre, email, password, setRepetirPassword].includes('')){
      setAlerta({msg: 'campos vacios', error: true })
      return
    }
    if (password !== repetirPassword){
      setAlerta({msg: 'los password son distintos', error: true })
      return
    }
    if (password.length<=6){
      setAlerta({msg: 'muy corto', error: true })
      return
    }
    //crear el usuario en la api
    try {
      const respuesta = await clienteAxios.post(`/MEDICOS`, {nombre, email, password} )
      console.log(respuesta)
      setAlerta({msg: 'Creado correctamente', error: false })
    } catch (error) {
      console.log(error.response.data.msg)
      setAlerta({msg: error.response.data.msg, error:true})
    }
  }  
  const {msg} = alerta
    return (
      <>
        <section className="form-section p-3">
                <div className="auth-wrapper form-login">
                  <h2 className="font-semibold color-title"> Crea tu cuenta y Administra los Pacientes </h2>
                  
                  <form  className="flex flex-col" onSubmit={handleSumit}>

                    <div className="flex flex-col border my-4">
                      <input className="input-not" type="text"  placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)}/>
                    </div>
                    <div className="flex flex-col border my-4">
                      <input className="input-not" type="email"  placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="flex flex-col border my-4">
                      <input className="input-not" type="password"  placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="flex flex-col border my-4">
                      <input className="input-not" type="password"  placeholder="Repite tu Password" value={repetirPassword} onChange={e => setRepetirPassword(e.target.value)} />
                    </div>
                    
                    <div className="py-3">
                      {/*si  no tiene mensaje no muestra la alerta */}
                    {msg && <Alerta alerta={alerta}/>}
                      
                    </div>
                    <div className="flex flex-col border my-4">
                      <input type="submit"  value="Registrarse" className="color-blue-new font-semibold py-3 text-white hover:cursor-pointer hover:color-blue-hover" />
                    </div>
                    
                  </form>
                  <p className='text-center color-title'><Link to="/">¿Ya tienes Cuenta? Volver</Link></p>
                </div>
        </section>
  
      </>
    )
  }
  
  export default registrar