import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroes:     string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  public deleteHero?: string;

  public addHeroe(heroe: string): void {
    this.heroes.push(heroe);
  }

  removeLastHeroe(): void {
    this.deleteHero = this.heroes.pop();
  }

}
