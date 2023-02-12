export interface AuthResponse {
    ok:      boolean;
    usuario: Usuario;
    token:   string;
}

export interface Usuario {
    nombre:   string;
    correo:   string;
    password?: string;
    rol?:      string;
    estado?:   boolean;
    uid?:      string;
}
