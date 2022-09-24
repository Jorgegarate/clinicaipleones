const olvidePassword = () => {
    return (
      <>
          <section className="form-section">
      <div className="auth-wrapper">
        <h2 className="font-semibold">Olvidaste Contraseña</h2>
        <form  className="flex flex-col" action="">

          <div className="flex flex-col border my-4">
            <label htmlFor="">Correo</label>
            <input type="text"  placeholder="Correo"/>
          </div>
          <div className="flex flex-col border my-4">
            <input type="submit"  value="Iniciar Sesión" className="bg-indigo-700 font-semibold py-3 text-white hover:cursor-pointer hover:bg-indigo-800" />
          </div>
          
        </form>
      </div>
    </section>
      </>
    )
  }
  
  export default olvidePassword