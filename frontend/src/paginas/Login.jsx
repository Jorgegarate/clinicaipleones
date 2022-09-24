import {Link} from 'react-router-dom';
const logins = () => {
  return (
    <>
    <section className="form-section">
      <div className="auth-wrapper">
        <h2 className="font-semibold"> Welcome to Cliniva </h2>
        <p>
          <Link to="/registrar">No tienes Cuenta? Registrar</Link>
        </p>
        <h2 className="font-bold">Sign in</h2>
        <form  className="flex flex-col" action="">

          <div className="flex flex-col border my-4">
            <label htmlFor="">Correo</label>
            <input type="text"  placeholder="Correo"/>
          </div>

          <div className="flex flex-col border my-4">
            <label htmlFor="">Password</label>
            <input type="password"  placeholder="Password" />
          </div>
          <div className="flex flex-col border my-4">
            <input type="submit"  value="Iniciar Sesión" className="bg-indigo-700 font-semibold py-3 text-white hover:cursor-pointer hover:bg-indigo-800" />
          </div>
          
        </form>
        <p><Link to="/olvidepassword">Olvidaste la contraseña</Link></p>
      </div>
    </section>

    </>
  )
}

export default logins