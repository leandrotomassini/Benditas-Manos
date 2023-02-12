import { IUsuario } from "./usuario";


export interface IServicio {
        idServicio?: string;
        usuario: IUsuario;
        nombreServicio: string;
        descripcion: string;
        precio: number;
        fotoServicio: string;
        estado: boolean;
}