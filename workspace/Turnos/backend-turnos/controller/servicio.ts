import { Request, Response } from 'express';

import { Servicio } from '../models/servicio';



export const getServicios = async (req: Request, res: Response) => {
    try {
        const query = { estado: true };

        const servicios = await Servicio.find();

        res.status(200).json({
            ok: true,
            servicios
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            error
        });
    }
}

export const crearServicio = async (req: Request, res: Response) => {

    try {

        const nombreServicio = req.body.nombreServicio;

        const servicioDB = await Servicio.findOne({ nombreServicio });

        if (servicioDB) {
            return res.status(400).json({
                msg: `El servicio:  ${servicioDB.nombreServicio} no puede crearse porque ya existe.`
            });
        }

        const servicioNuevo = new Servicio(req.body);

        // Guardar DB
        await servicioNuevo.save();

        res.status(200).json({
            ok: true,
            servicioNuevo
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            error
        });
    }

}

export const actualizarServicio = async (req: Request, res: Response) => {

    try {

        const id = req.params.idServicio;

        const servicio = await Servicio.findByIdAndUpdate(id, req.body, { new: true });

        res.status(200).json({
            ok: true,
            servicio
        });
    } catch (error) {
        res.status(404).json({
            ok: false,
            error
        });
    }
}



export const obtenerServicio = async (req: Request, res: Response) => {
    try {
        const idServicio = req.params.idServicio;

        const servicio = await Servicio.findById(idServicio);

        res.status(200).json({
            ok: true,
            servicio
        });
    } catch (error) {
        res.status(404).json({
            ok: false,
            error
        });
    }
}