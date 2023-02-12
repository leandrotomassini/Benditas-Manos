import { Request, Response } from 'express';

import { Historia } from '../models/historia';



export const listarHistoria = async (req: Request, res: Response) => {
    try {
        const historia = await Historia.find();

        res.status(200).json({
            ok: true,
            historia
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            error
        });
    }
}

export const nuevaHistoria = async (req: Request, res: Response) => {

    try {
        const { usuario, paciente, historia, fecha, estado } = req.body;

        const nuevaHistoria = new Historia({ usuario, paciente, historia, fecha, estado });

        await nuevaHistoria.save();

        res.json({
            nuevaHistoria
        });
    } catch (error) {
        res.status(404).json({
            ok: false,
            msg: 'Error al guardar la nueva historia.',
            error
        })
    }
}

export const actualizarHistoria = async (req: Request, res: Response) => {

    try {

        const id = req.params.id;
        const { usuario, paciente, historia, fecha, estado } = req.body;

        const historiaActualizada = await Historia.findByIdAndUpdate(
            id,
            { usuario, paciente, historia, fecha, estado },
            { new: true });

        res.status(200).json({
            ok: true,
            historiaActualizada
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            error
        });
    }
}

export const verHistoria = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        const historia = await Historia.find({ paciente: id });

        res.status(200).json({
            ok: true,
            historia
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            error
        });
    }
}