import Paciente from "../models/paciente.js";
const agregarPaciente = async (req, res) => {
 const paciente = new Paciente(req.body);
 paciente.medico = req.medico._id;
 try {
    const pacienteAlmacenado = await paciente.save();
    res.json(pacienteAlmacenado);
 } catch (error) {
    console.log(error);
 }

};
const obtenerPacientes = async (req, res) => {
   const pacientes = await Paciente.find().where('medico').equals(req.medico);
   res.json(pacientes);

};
const obtenerPaciente = async (req, res) =>{
 const {id} =req.params;
 const paciente = await Paciente.findById(id);


 //No encotrado
if(!paciente){
 return res.status(404).json({msg:"No encontrado"});
}

 if (paciente.medico._id.toString()!== req.medico._id.toString()) {
   return res.json({msg: "accion no válida"});
 }
 // Quien creo el paciente puede solo verlo
 if (paciente) {
   res.json(paciente);
 }
};
const actualizarPaciente = async (req, res) =>{
   const {id} =req.params;
   const paciente = await Paciente.findById(id);
   //No encotrado
  if(!paciente){
   return res.status(404).json({msg:'No encontrado'})
  }
   if (paciente.medico._id.toString()!== req.medico._id.toString()) {
     return res.json({msg: "accion no válida"});
   }
  //actualizar paciente
  //Datos para cambiar fecha de registro
  paciente.fecha = req.body.fecha;
  try {
   const pacienteActualizado = await paciente.save();
   res.json(pacienteActualizado)
  } catch (error) {
   console.error
   
  }
  };

const eliminarPaciente = async (req, res) =>{

  };
export {
   agregarPaciente,
   obtenerPacientes,
   obtenerPaciente,
   actualizarPaciente,
   eliminarPaciente
};