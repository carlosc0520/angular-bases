import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {

  @Output()
  public onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  public personaje: Personaje = {
    name: '',
    power: 0,
    id: ''
  }

  add(): void {
    if (this.personaje.name.trim().length === 0) return;

    this.onNewPersonaje.emit(this.personaje);
    this.reset();
  }

  reset(): void {
    this.personaje = {
      name: '',
      power: 0,
      id: ''
    }
  }

}
