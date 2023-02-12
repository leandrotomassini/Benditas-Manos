import { Schema, model } from 'mongoose';

import { IServicio } from '../interfaces/servicio';

const ServiciosSchema = new Schema<IServicio>({
    usuario: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    nombreServicio: {
        type: String,
        required: [true, 'El nombre del servicio es bligatorio.']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción del servicio es bligatorio.']
    },
    precio: {
        type: Number,
        required: [true, 'El precio del servicio es bligatorio.']
    },
    fotoServicio: {
        type: String,
        required: [true, 'La foto  del servicio es bligatoria.']
    },
    estado: {
        type: Boolean,
        default: true
    },
});

export const Servicio = model<IServicio>('Servicio', ServiciosSchema);