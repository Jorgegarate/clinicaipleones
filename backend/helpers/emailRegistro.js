import nodemailer from 'nodemailer';

const emailRegistro = async (datos) => {
    var transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });
const {email, nombre, token} = datos;

//enviar email
const info = await transporte.sendMail({
    from: "Clinica-IP Administrador de Paciente ",
    to: email,
    subject: "Valida tu cuenta en Clinica-IP",
    text: 'Comprueba tu cuenta en Clinica-IP',
    html:`
    <p>Hola: ${nombre}, Comprueba tu cuenta </p>
    <p>Tu cuenta ya esta lista, solo debes validar en el siguiente enlace:</p> 
    <a href="${process.env.FRONTEND_URL}/confirmarcuenta/${token}">Comprobar cuenta </a> 
    <p>Si no creaste esta cuenta, favor realizar caso omiso de este mensaje</p>
    `,

})
}
export default emailRegistro;