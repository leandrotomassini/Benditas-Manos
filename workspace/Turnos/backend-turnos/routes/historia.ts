import { Router } from 'express';

import { actualizarHistoria, listarHistoria, nuevaHistoria, verHistoria } from '../controller/historia';


import { validarCampos } from '../middlewares/validar-campos';
import { validarJWT } from '../middlewares/validar-jwt';
import { esAdminRole } from '../middlewares/validar-roles';

const router = Router();

router.get('/', [
    validarJWT,
    esAdminRole,
    validarCampos
], listarHistoria);

router.post('/', [
    validarJWT,
    esAdminRole,
    validarCampos
], nuevaHistoria);

router.put('/:id', [
    validarJWT,
    esAdminRole,
    validarCampos
], actualizarHistoria);

router.get('/:id', [
    validarJWT,
    esAdminRole,
    validarCampos
], verHistoria);

export default router;