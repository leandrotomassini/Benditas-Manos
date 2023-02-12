import { IPaciente } from "./paciente";
import { IUsuario } from "./usuario";


export interface IHistoria {
    paciente: IPaciente;
    usuario: IUsuario;
    fecha: string;
    historia: string;
    estado: boolean;
}