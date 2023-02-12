import { Schema, model } from 'mongoose';


import { IDiaTurno } from '../interfaces/diaTurno';

const DiaTurnoSchema = new Schema<IDiaTurno>({
    fecha: {
        type: Date,
        required: [true, 'La fecha del turno es obligatoria.']
    },
    usuario: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    servicio: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Servicio'
    },
    estado: {
        type: Boolean,
        default: true
    },
});

export const DiaTurno = model<IDiaTurno>('DiaTurno', DiaTurnoSchema);