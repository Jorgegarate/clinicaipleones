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
    <section className="form-section p-3">
        <div className="auth-wrapper form-login">
        <h2 className="font-semibold color-title">Restablece tu contraseña y no pierdas tu cuenta</h2>
      {msg && <Alerta alerta={alerta}/>}
      {tokenValido &&(
        <>
                      <form onSubmit={handleSubmit} >
              <div className="flex flex-col border my-4">
                <input className="input-not" type="password"  placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} />
              </div>
              <div className="flex flex-col border my-4">
                <input className="input-not" type="password"  placeholder="Repite tu Contraseña" value={repetirPassword} onChange={e => setRepetirPassword(e.target.value)} />
              </div>
              
              <div className="py-3">
                            {/*si  no tiene mensaje no muestra la alerta */}
                          
                            
              </div>
              <div className="flex flex-col my-4">
                            <input type="submit"  value="Restablecer" className=" color-blue-new font-semibold p-4 text-white hover:cursor-pointer hover:color-blue-hover my-5" />
              </div>
            </form>

        </>

      )}
      {passwordModificado && <Link className="flex-none w-14 h-14" to="/">Volver al Inicio</Link>}

      </div>
    </section>
    </>

  )
}

export default NuevoPassword