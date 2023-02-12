import { Router } from 'express';
import { check } from 'express-validator';

import { validarCampos } from '../middlewares/validar-campos';
import { validarJWT } from '../middlewares/validar-jwt';
import { esAdminRole } from '../middlewares/validar-roles';

import { actualizarServicio, crearServicio, getServicios, obtenerServicio } from '../controller/servicio';

const router = Router();

router.get('/', [
    validarCampos
], getServicios);

router.post('/', [
    validarJWT,
    esAdminRole,
    check('nombreServicio', 'El nombre del servicio es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripción del servicio es obligatoria').not().isEmpty(),
    check('fotoServicio', 'La foto del servicio es obligatoria').not().isEmpty(),
    check('precio', 'El precio del servicio es obligatorio').not().isEmpty(),
    validarCampos
], crearServicio);

router.put('/:idServicio', [
    validarJWT,
    esAdminRole,
    check('nombreServicio', 'El nombre del servicio es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripción del servicio es obligatoria').not().isEmpty(),
    check('fotoServicio', 'La foto del servicio es obligatoria').not().isEmpty(),
    check('precio', 'El precio del servicio es obligatorio').not().isEmpty(),
    validarCampos
], actualizarServicio);

router.get('/:idServicio', [
    validarCampos
], obtenerServicio);


export default router;