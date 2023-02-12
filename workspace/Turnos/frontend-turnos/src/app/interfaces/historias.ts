export interface HistoriasResponse {
    ok:       boolean;
    historia: Historia[];
}

export interface Historia {
    _id?:      string;
    usuario:  string;
    paciente: string;
    historia: string;
    fecha:    string;
    estado:   boolean;
    __v?:      number;
}
