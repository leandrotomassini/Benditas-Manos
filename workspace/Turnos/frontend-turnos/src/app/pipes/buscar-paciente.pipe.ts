import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarPaciente'
})
export class BuscarPacientesPipe implements PipeTransform {


  transform(arreglo: any[], texto: string = '') {

    try {

      texto = texto.toLocaleLowerCase();

      let resultadosPacientes = arreglo.filter(
        item => item['nombre'].toLowerCase().includes(texto),
      );

      return resultadosPacientes;
    } catch (error) {
      return arreglo;
    }
  }

}
