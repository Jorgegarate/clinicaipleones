import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Alerta from '../components/Alerta';
import clienteAxios from '../config/axios';
import {Link} from 'react-router-dom';
const NuevoPassword = () => {
  const [password, setPassword]= useState('')
  const [alerta, setAlerta]= useState({})
  const [tokenValido, setTokenValido] = useState(false)
  const [repetirPassword, setRepetirPassword] = useState('')
  const [passwordModificado, setPasswordModificado] = useState(false)
  const params = useParams()
  const {token} = params
  useEffect(() => {
    const comprobrarToken = async () => {
      try {
        await clienteAxios(`/MEDICOS/olvide-password/${token}`)
        setAlerta({
          msg:'coloca tu nueva contraseña'
        })
        setTokenValido(true)
      } catch (error) {
        setAlerta ({
          msg:'hubo un error con el enlace',
          error:true
        })
      }
    } 
    comprobrarToken()
  },[])
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('aaa', repetirPassword, ' eee', password)
    if (password!=repetirPassword){
      setAlerta({
        msg: 'las constraseñas son distintas', 
        error: true, 
      })
      return
    }else if(password.length<=6){
      setAlerta({
        msg: 'muy corto', 
        error: true, 
      })
      return
    }
      try {
        const url =`/MEDICOS/olvide-password/${token}`
        const {data} = await clienteAxios.post(url, {password} )
        console.log(data)
        setAlerta({
          msg: data.msg
        })
        setPasswordModificado(true)
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }

    
    //crear el usuario en la api
  }
  const {msg} = alerta

  return (
    <>
    <div>
      <h1>Restablece tu contraseña y no Pierdas tu cuenta</h1>
      {msg && <Alerta alerta={alerta}/>}
      {tokenValido &&(
        <>
                      <form onSubmit={handleSubmit} >
              <div className="flex flex-col border my-4">
                <label htmlFor="">Password</label>
                <input type="password"  placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
              </div>
              <div className="flex flex-col border my-4">
                <label htmlFor="">Password</label>
                <input type="password"  placeholder="Repite tu Password" value={repetirPassword} onChange={e => setRepetirPassword(e.target.value)} />
              </div>
              
              <div className="py-3">
                            {/*si  no tiene mensaje no muestra la alerta */}
                          
                            
              </div>
              <div className="flex flex-col border my-4">
                            <input type="submit"  value="Registrarse" className="bg-indigo-700 font-semibold py-3 text-white hover:cursor-pointer hover:bg-indigo-800" />
              </div>
            </form>

        </>

      )}
      {passwordModificado && <Link className="flex-none w-14 h-14" to="/">Iniciar Sesión</Link>}

    </div>
    </>

  )
}

export default NuevoPassword