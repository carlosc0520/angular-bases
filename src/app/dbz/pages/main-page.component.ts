import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Personaje } from '../interfaces/personaje.interface';

@Component({
  selector: 'selector-name',
  templateUrl: './main-page.component.html',
})
export class NameComponent {
  constructor(private dbzService: DbzService) { }

  get personajesList(): Personaje[] {
    return [...this.dbzService.personajes];
  }

  borrarPersonaje(id: string): void {
    this.dbzService.borrarPersonaje(id);
  }

  agregarNuevoPersonaje(personaje: Personaje): void {
    this.dbzService.agregarNuevoPersonaje(personaje);
  }
}
