import { Schema, model } from 'mongoose';

import { IHistoria } from '../interfaces/historia';

const HistoriaSchema = new Schema<IHistoria>({
    usuario: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    paciente: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Paciente'
    },
    historia: {
        type: String,
        required: [true, 'La historia es obligatoria.']
    },
    fecha: {
        type: String,
        required: [true, 'La fecha es obligatoria.']
    },
    estado: {
        type: Boolean,
        default: true
    },
});

export const Historia = model<IHistoria>('Historia', HistoriaSchema);