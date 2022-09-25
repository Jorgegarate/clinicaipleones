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
        <div className=''>
          <h2>confirma tu cuenta y administrar tu paciente</h2>
          {!cargando && <Alerta alerta={alerta}/>}
          {cuentaConfirmada && <Link to="/">Iniciar Sesión</Link>}
        </div>
       
      </>
    )
  }
  
  export default ConfirmarCuenta