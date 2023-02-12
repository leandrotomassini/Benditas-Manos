import { Request, Response } from 'express';

import { Paciente } from '../models/paciente';



export const listarPacientes = async (req: Request, res: Response) => {
    try {
        const pacientes = await Paciente.find();

        res.status(200).json({
            ok: true,
            pacientes
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            error
        });
    }
}

export const crearPaciente = async (req: Request, res: Response) => {

    try {
        const { usuario, nombre, sexo, dni, fechaNacimiento, direccion, obraSocial, estado } = req.body;

        const paciente = new Paciente({ usuario, nombre, sexo, dni, fechaNacimiento, direccion, obraSocial, estado });


        await paciente.save();

        res.json({
            paciente
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            ok: false,
            msg: 'Error al guardar el nuevo paciente.'
        })
    }
}

export const actualizarPaciente = async (req: Request, res: Response) => {

    try {

        const id = req.params.id;
        const { usuario, nombre, sexo, dni, fechaNacimiento, direccion, obraSocial, estado } = req.body;

        const paciente = await Paciente.findByIdAndUpdate(
            id,
            { usuario, nombre, sexo, dni, fechaNacimiento, direccion, obraSocial, estado },
            { new: true });

        res.status(200).json({
            ok: true,
            paciente
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            error
        });
    }
}

export const verPaciente = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        const paciente = await Paciente.findById(id);

        res.status(200).json({
            ok: true,
            paciente
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            error
        });
    }
}