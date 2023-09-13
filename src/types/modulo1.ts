/*
 * string
 * boolean
 * Number
 * Array
 * Tuplas
 * Enums
 * Any
 * Void
 */

let nombre_var: string = 'Nombre';

let edad: number = 25;

let lista: number[] = [1, 2, 3];

let lista2: Array<number> = [1, 2, 3];

let tupla: [string, number, boolean];

tupla = ['Cinta', 42, true];

enum Animales {
  Perro,
  Gato,
  Pájaro,
}

let animal: Animales = Animales.Pájaro;

let cualquiera: any = true;

let nada: void = undefined;

/*
 * Clases
 */

class NombreClase {
  private _propiedad: string;
  constructor(propiedad: string) {
    this._propiedad = propiedad;
  }
  get getPropiedad(): string {
    return this._propiedad;
  }

  set propiedad(propiedad: string) {
    this._propiedad = propiedad;
  }

  printMsg(): string {
    return 'Esta clase tienen:' + this._propiedad;
  }
}

/*
 * Interfaces
 */

interface LogInterfaces {
  msg: string;
  date?: number;
}

function Logger(log: LogInterfaces) {
  console.log(log.msg);
}

/*
 * Módulos & Namespace
 */

/* import {validator} from './path'; */

export class Validator {
  Validator(n: number): boolean {
    return n > 5;
  }
}

namespace Validacion {
  export interface ValidadorNumero {
    isValid(n: number): boolean;
  }

  export class validacionLong implements ValidadorNumero {
    isValid(n: number): boolean {
      return true;
    }
  }
}

let validador: Validacion.ValidadorNumero = new Validacion.validacionLong();

/*
 * Genéricos
 */

function compare<T>(arg1: T, arg2: T): T {
  if (arg1 > arg2) {
    return arg1;
  } else {
    return arg2;
  }
}

function compareAny(arg1: any, arg2: any): any {
  return arg1;
}

/*
 * Decoradores o Anotaciones
 */

/* function Logged() {
  return function (target) {
    console.log('Funcion llamada');
  };
}

class prueba {
  @Logged()
  metodo(): boolean {
    return true;
  }
} */
