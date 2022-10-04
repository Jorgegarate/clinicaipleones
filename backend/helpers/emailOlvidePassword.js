import nodemailer from 'nodemailer';

const emailOlvidePassword = async (datos) => {
    const transporte = nodemailer.createTransport({
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
    subject: " Restablece tu contraseña",
    text: 'Restablece tu contraseña',
    html:`
    <p>Hola ${nombre}, has solicitado restablecer tu contraseña </p>
    <p>Enlace para restablecer contraseña:</p> 
    <a href="${process.env.FRONTEND_URL}/olvidepassword/${token}">Comprobar cuenta </a> 
    <p>Si no creaste esta cuenta, favor realizar caso omiso de este mensaje</p>
    `,

})
}
export default emailOlvidePassword;