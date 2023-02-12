import { Schema, model } from 'mongoose';

import { ICliente } from '../interfaces/cliente';

const ClienteSchema = new Schema<ICliente>({
    nombreCliente: {
        type: String,
        required: [true, 'El nombre del cliente es obligatorio']
    },
    correo: {
        type: String,
        required: [false, 'El email del cliente es obligatorio']
    },
    telefono: {
        type: String,
        required: [true, 'El teléfono del cliente es obligatorio']
    },
    estado: {
        type: Boolean,
        default: true
    },
});

export const Cliente = model<ICliente>('Cliente', ClienteSchema);