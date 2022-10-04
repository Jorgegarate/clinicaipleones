import Medico from "../models/Medico.js";
import generarJWT from "../helpers/generarJWT.js";
import generarId from "../helpers/generarId.js";
import emailRegistro from "../helpers/emailRegistro.js";
import emailOlvidePassword from "../helpers/emailOlvidePassword.js"
const registrar = async (req, res)=>{
const {email, nombre} =req.body;
    //PREVENIR USUARIOS REPLICADO

    const existeUsuario = await Medico.findOne({email})
    if (existeUsuario) {
        const error = new Error("Usuario ya registrado- desde backend");
        return res.status(400).json({msg: error.message });
    }
    try {
        //guardar un Nuevo medico 
        const medico = new Medico(req.body);
        const medicoGuardado = await medico.save();

        //Enviar el email
        emailRegistro({
            email,
            nombre,
            token: medicoGuardado.token
        })
        res.json(medicoGuardado);
    } catch (error) {
        console.log(error)
    }

};
const perfil = (req, res)=>{
    const {medico} = req
    res.json({medico});
};

const confirmar = async (req, res) => {
    const  {token} = req.params;
    const  usuarioConfirmado = await Medico.findOne({token});
    if (!usuarioConfirmado){
        const error = new Error(`token no válido`);
        //uso del return para no pasar al confirmado
        return res.status(400).json({msg: error.message});   
    }
    try {
        usuarioConfirmado.token = null;
        usuarioConfirmado.confirmado =true;
        await usuarioConfirmado.save()
        console.log(usuarioConfirmado)
        //solucion por ahora
        res.json({msg:"Confirmo correctamente su cuenta.."});
    } catch (error) {
        console.log(error)
    }
};
const autenticar = async (req, res) => {
    const { email, password } = req.body;
    // Comprobar si el usuario existe
    const  usuario = await Medico.findOne({email})
    if (!usuario) {
        const error = new Error("usuario no existe");
        return res.status(404).json({msg: error.message});
    }
    //comprobar si el usuario esta confirmado
    if (!usuario.confirmado){
        const error = new Error('Tu cuenta no ha sido confirmada')
        return res.status(403).json({msg: error.message });
    }
    //revisar password
    if (await usuario.comprobarPassword(password)){
        //autenticar
        res.json({
            _id:usuario._id, 
            nombre:usuario.nombre,
            email:usuario.email,
            token:generarJWT(usuario.id),
        } );

    } else {
        const error = new Error('password incorrecto');
        return res.status(403).json({msg: error.message });
    }
};
const olvidePassword = async (req, res) => {
 const {email}= req.body
 const existeMedico = await Medico.findOne({email})
 if (!existeMedico) {
    const error = new Error('El usuario no existe');
    return res.status(400).json({msg: error.message});
 }
 try {
    existeMedico.token = generarId()
    await existeMedico.save();
    //Enviar Email con instrucciones
    emailOlvidePassword ({
        email, 
        nombre: existeMedico.nombre,
        token: existeMedico.token,
    });

    res.json({msg:'hemos enviado un mensaje con las instrucciones'});
    
 } catch (error) {
    
 }
}
const comprobarToken = async(req, res) => {
    const {token} = req.params;
    const tokenValido = await Medico.findOne({token});
    if (tokenValido){
        res.json({msg:"token valido y el usuario"});
    }
    else {
        const error = new Error('token no valido');
        return res.status(400).json({msg: error.message});
     } 
}
const nuevoPassword = async(req, res) => {
    const {token} = req.params;
    const {password} = req.body;
    const medico = await Medico.findOne({token});
    if (!medico){
        const error = new Error('Paso un error');
        return res.status(400).json({msg: error.message})
    }
    try {
        medico.token= null;
        medico.password= password;
        await medico.save();
        res.json({msg:"Contraseña modificada correctamente"});
        console.log(medico);
    } catch (error) {
        console.log(error);
        
    }
}

export { registrar, perfil, confirmar, autenticar, olvidePassword, comprobarToken, nuevoPassword};