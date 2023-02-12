import { ICliente } from "./cliente";
import { IDiaTurno } from "./diaTurno";
import { IHorarioTurno } from "./horarioTurno";

export interface ITurnoAsignado {
    cliente: ICliente;
    diaTurno: IDiaTurno;
    horarioTurno: IHorarioTurno;
    pagoRealizado: number;
    fechaDePago: Date;
    estado: boolean;
}