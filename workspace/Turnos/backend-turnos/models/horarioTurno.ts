import { Schema, model } from 'mongoose';

import { IHorarioTurno } from '../interfaces/horarioTurno';

const HorarioTurnoSchema = new Schema<IHorarioTurno>({
    diaTurno: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'DiaTurno'
    },
    hora: {
        type: String,
        required: [false, 'La hora del turno es obligatoria.']
    },
    usuario: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    estado: {
        type: Boolean,
        default: true
    },
});

export const HorarioTurno = model<IHorarioTurno>('HorarioTurno', HorarioTurnoSchema);