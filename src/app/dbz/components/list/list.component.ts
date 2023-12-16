import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: "./list.component.html",
})
export class ListComponent {

  @Output()
  public onDeletePersonaje: EventEmitter<string> = new EventEmitter();

  @Input("personajesList")
  public personajesList: Personaje[] = []

  borrar(id: string): void {
    this.onDeletePersonaje.emit(id);
  }
}
