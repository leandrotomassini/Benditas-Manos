import { Schema, model } from 'mongoose';

import { ITurnoAsignado } from '../interfaces/turnoAsignado';

const TurnoAsignadoSchema = new Schema<ITurnoAsignado>({
    diaTurno: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'DiaTurno'
    },
    horarioTurno: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'HorarioTurno'
    },
    cliente: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Cliente'
    },
    estado: {
        type: Boolean,
        default: true
    },
});

export const TurnoAsignado = model<ITurnoAsignado>('TurnoAsignado', TurnoAsignadoSchema);