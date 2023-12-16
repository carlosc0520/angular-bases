import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  template: `
    <p>Esto es un parrafo tiene {{counter}}</p>
    <button
    (click)="incrementar()"
    >+1</button>
    <button
    (click)="decrementar(3)"
    >-1</button>
  `
})

export class CounterComponent {
  constructor() { }

  public title:string = 'Hola mundo';
  public counter:number = 10;

  incrementar():void {
    this.counter++;
  }

  decrementar(value: number):void {
    this.counter -= value;
  }
}
