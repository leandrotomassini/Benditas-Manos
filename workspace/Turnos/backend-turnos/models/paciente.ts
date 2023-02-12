import { Schema, model } from 'mongoose';

import { IPaciente } from '../interfaces/paciente';

const PacienteSchema = new Schema<IPaciente>({
    usuario: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    nombre: {
        type: String,
        required: [true, 'El nombre del paciente es bligatorio.']
    },
    sexo: {
        type: String,
        required: [true, 'El sexo del paciente es bligatorio.']
    },
    dni: {
        type: String,
        required: [true, 'El DNI del paciente es bligatorio.']
    },
    fechaNacimiento: {
        type: String,
        required: [true, 'La fecha de nacimiento es obligatoria.']
    },
    direccion: {
        type: String,
        required: [true, 'La dirección del paciente es obligatoria.']
    },
    obraSocial: {
        type: String,
        required: [true, 'La obra social del paciente es obligatoria.']
    },
    estado: {
        type: Boolean,
        default: true
    },
});

export const Paciente = model<IPaciente>('Paciente', PacienteSchema);