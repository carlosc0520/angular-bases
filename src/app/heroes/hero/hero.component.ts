import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'windstorm';
  public age:  number = 20;

  constructor() { }

  get capitalizeName(): string {
    return this.name?.toUpperCase();
  }

  setName(name: string) {
    this.name = name;
  }

  setAge(age: number) {
    this.age = age;
  }

  getHeroDescription(): string {
    return `${this.capitalizeName} tiene ${this.age} años`;
  }

  resetHero() {
    this.name = 'windstorm';
    this.age = 20;
  }


}
