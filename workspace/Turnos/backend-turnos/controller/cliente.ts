import { Request, Response } from 'express';

import { Cliente } from '../models/cliente';



export const verClientes = async (req: Request, res: Response) => {
    try {
        const query = { estado: true };

        const clientes = await Cliente.find();

        res.status(200).json({
            ok: true,
            clientes
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            error
        });
    }
}

export const nuevoCliente = async (req: Request, res: Response) => {

    try {

        const nuevoCliente = new Cliente(req.body);

        // Guardar DB
        await nuevoCliente.save();

        res.status(200).json({
            ok: true,
            nuevoCliente
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            ok: false,
            error
        });
    }

}

export const actualizarCliente = async (req: Request, res: Response) => {

    try {

        const id = req.params.idCliente;

        const cliente = await Cliente.findByIdAndUpdate(id, req.body, { new: true });

        res.status(200).json({
            ok: true,
            cliente
        });
    } catch (error) {
        res.status(404).json({
            ok: false,
            error
        });
    }
}



export const verCliente = async (req: Request, res: Response) => {
    try {
        const idCliente = req.params.idCliente;

        const cliente = await Cliente.findById(idCliente);

        res.status(200).json({
            ok: true,
            cliente
        });
    } catch (error) {
        res.status(404).json({
            ok: false,
            error
        });
    }
}