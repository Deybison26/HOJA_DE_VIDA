import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    
  nombre = 'Rodriguez Pablo';
  edad = 40;
  sueldos = [1700, 1600, 1900];

    heroes:Heroe[]=[];
    constructor(private _heroesService:HeroesService){}

    ngOnInit(): void {
      this.heroes= this._heroesService.getHeroes();
      console.log(this.heroes);
      
    }
}
