import { IUsuario } from "./usuario";

export interface IPaciente {
    nombre: string;
    direccion: string;
    sexo: string;
    dni: string;
    obraSocial: string;
    usuario: IUsuario;
    estado: boolean;
    fechaNacimiento: string;
}