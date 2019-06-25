import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  cars: any[];
  constructor() {
    this.cars = [
      { name: 'Pikachu', year: 2010, reason: 'ta chido', photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' },
      { name: 'Squirtle', year: 2010, reason: 'ta chido', photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
      { name: 'Charmander', year: 2010, reason: 'ta chido', photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
      { name: 'Bulbasaur', year: 2010, reason: 'ta chido', photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
      { name: 'Nidoran-f', year: 2010, reason: 'ta chido', photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png' },
      { name: 'Pidgey', year: 2010, reason: 'ta chido', photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png' },
      { name: 'Kakuna', year: 2010, reason: 'ta chido', photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png' },
      { name: 'Weedle', year: 2010, reason: 'ta chido', photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png' },
      { name: 'Caterpie', year: 2010, reason: 'ta chido', photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png' },
      { name: 'meowth', year: 2010, reason: 'ta chido', photo: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/52.png' },

    ];
  }

  ngOnInit() {
  }

}
