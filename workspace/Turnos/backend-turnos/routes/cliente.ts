import { Router } from 'express';
import { check } from 'express-validator';

import { validarCampos } from '../middlewares/validar-campos';
import { validarJWT } from '../middlewares/validar-jwt';
import { esAdminRole } from '../middlewares/validar-roles';

import { actualizarCliente, nuevoCliente, verCliente, verClientes } from '../controller/cliente';

const router = Router();

router.get('/', [
    validarJWT,
    esAdminRole,
    validarCampos
], verClientes);

router.post('/', [
    check('nombreCliente', 'El nombre del cliente es obligatorio').not().isEmpty(),
    check('telefono', 'El teléfono del cliente es obligatoria').not().isEmpty(),
    validarCampos
], nuevoCliente);

router.put('/:idCliente', [
    validarJWT,
    esAdminRole,
    check('nombreCliente', 'El nombre del cliente es obligatorio').not().isEmpty(),
    check('telefono', 'El teléfono del cliente es obligatoria').not().isEmpty(),
    validarCampos
], actualizarCliente);

router.get('/:idCliente', [
    validarJWT,
    esAdminRole,
    validarCampos
], verCliente);


export default router;