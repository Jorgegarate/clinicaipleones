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
const obtenerPaciente = async (req, res) => {
   const pacientes = await Paciente.find().where('medico').equals(req.medico);
   res.json(pacientes);

};
export  {agregarPaciente, obtenerPaciente};