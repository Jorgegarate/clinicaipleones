import {Outlet} from 'react-router-dom'
import LogoBlanco from "../img/logo-blanco.png"

const AuthLayout = () => {
  return (
    < >
    <main className='md:grid md:grid-cols-2'>
      <div className='fondo flex flex-row md:flex-col'>
      <img src={`${LogoBlanco}`} className="img" />
      <h1 className='text-white font-bold uppercase text-4xl my-5'>CMPG</h1>
      </div>
      <Outlet className="auth-wrapper form-login"/>
    </main>
    </>

  )
}
export default AuthLayout;
