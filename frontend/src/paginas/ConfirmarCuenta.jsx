import {useEffect, useState}from 'react';
import {useParams, Link} from 'react-router-dom';
import clienteAxios from '../config/axios';
import Alerta from '../components/Alerta';
const ConfirmarCuenta = () => {
   const [cuentaConfirmada, setCuentaConfirmada] = useState(false)
   const [cargando, setCargando] = useState(true)
   const [alerta, setAlerta] = useState({})
   const params = useParams();
   const {id} = params;
   
  useEffect(() => {
    const confirmarCuenta= async () => {
      try {
        const url = `/MEDICOS/confirmar/${id}`
        const {data} = await clienteAxios(url)
        console.log(data);
        setCuentaConfirmada(true);
        setAlerta({
          msg: data.msg
        })

      } catch (error) {
        setAlerta({
          msg:error.response.data.msg,
          error:true
        })
      }
      setCargando(false)
    }
    confirmarCuenta();
  },[]);
    return (
      <>
      <section className="form-section">
        <div className="auth-wrapper form-login text-center">
           <h2 className="font-semibold color-title">confirma tu cuenta y administrar tu paciente</h2>
          {!cargando && <Alerta  className="my-5"alerta={alerta}/>}
          {cuentaConfirmada && <Link className=" color-blue-new font-semibold p-4 text-white hover:cursor-pointer hover:color-blue-hover my-5" to="/">Iniciar Sesión</Link>}
        </div>
      </section>
      </>
    )
  }
  
  export default ConfirmarCuenta