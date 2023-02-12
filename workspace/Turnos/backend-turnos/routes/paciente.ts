import { Router } from 'express';
import { check } from 'express-validator';

import { actualizarPaciente, crearPaciente, listarPacientes, verPaciente } from '../controller/paciente';

import { validarCampos } from '../middlewares/validar-campos';
import { validarJWT } from '../middlewares/validar-jwt';
import { esAdminRole } from '../middlewares/validar-roles';

const router = Router();

router.get('/', [
    validarJWT,
    esAdminRole,
    validarCampos
], listarPacientes);

router.post('/', [
    validarJWT,
    esAdminRole,
    validarCampos
], crearPaciente);

router.put('/:id', [
    validarJWT,
    esAdminRole,
    validarCampos
], actualizarPaciente);

router.get('/:id', [
    validarJWT,
    esAdminRole,
    validarCampos
], verPaciente);

export default router;