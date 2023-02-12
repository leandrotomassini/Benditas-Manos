import { IServicio } from "./servicio";
import { IUsuario } from "./usuario";

export interface IDiaTurno{
    fecha: Date;
    usuario: IUsuario;
    servicio: IServicio;
    estado: boolean;
}