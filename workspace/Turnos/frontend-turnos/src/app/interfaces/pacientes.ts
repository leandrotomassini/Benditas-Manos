export interface PacientesResponse {
    ok:        boolean;
    pacientes: Paciente[];
}

export interface PacienteResponse {
    ok:       boolean;
    paciente: Paciente;
}

export interface Paciente {
    _id?:             string;
    usuario:         string;
    nombre:          string;
    sexo:            string;
    dni:             string;
    fechaNacimiento: string;
    direccion:       string;
    obraSocial:      string;
    estado:          boolean;
    __v?:             number;
}
