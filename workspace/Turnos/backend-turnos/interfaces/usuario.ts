export interface IUsuario {
    id?: string;
    nombre: string;
    password?: string;
    correo: string;
    img: string;
    rol: string;
    estado: boolean;
}