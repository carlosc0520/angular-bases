import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Personaje } from '../interfaces/personaje.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  constructor() { }

  public personajes: Personaje[] = []

  public agregarNuevoPersonaje(personaje: Personaje): void {
    this.personajes.push({
      ...personaje,
      id: uuid()
    });
  }

  public borrarPersonaje(id?: string): void {
    this.personajes = this.personajes.filter(personaje => personaje.id !== id);
  }


}
