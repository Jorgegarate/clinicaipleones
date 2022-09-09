import express from "express";
const router = express.Router();
import {agregarPaciente, obtenerPaciente}from '../controllers/pacienteController.js'
import checkAuth from '../middleware/authMiddleware.js'

router.route('/').post(checkAuth, agregarPaciente).get(checkAuth, obtenerPaciente);

export default router;