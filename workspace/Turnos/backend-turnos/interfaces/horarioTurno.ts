import { IDiaTurno } from "./diaTurno";
import { IUsuario } from "./usuario";

export interface IHorarioTurno {
    diaTurno: IDiaTurno;
    hora: string;
    usuario: IUsuario;
    estado: boolean;
}