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
            {Nombre: 'Stark', year: 1998, motivo: 'Lobos', image: 'https://banner2.kisspng.com/20180319/llw/kisspng-brand-computer-wallpaper-logo-stark-5ab080f9cabd53.2504417015215167938304.jpg'},
            {Nombre: 'Lannister', year: 1999, motivo: 'Leones', image: 'https://banner2.kisspng.com/20180526/rtz/kisspng-tywin-lannister-a-game-of-thrones-tyrion-lannister-5b0a0d2cd988b0.384324081527385388891.jpg'},
            {Nombre: 'Baratheon', year: 2000, motivo: 'Venado', image: 'https://banner2.kisspng.com/20180615/yyu/kisspng-house-arryn-a-game-of-thrones-house-baratheon-hous-house-baratheon-5b234c8c2d6ca7.3126738315290400121861.jpg'},
            {Nombre: 'Targaryen', year: 2001, motivo: 'Dragon', image: 'https://banner2.kisspng.com/20180319/ddw/kisspng-orange-circle-red-font-targaryen-5ab080f7abebe9.5327574815215167917042.jpg'},
            {Nombre: 'Tyrell', year: 2000, motivo: 'Flores', image: 'https://banner2.kisspng.com/20180206/teq/kisspng-house-tyrell-theon-greyjoy-house-targaryen-icon-house-tyrell-transparent-background-5a79d7ce0753c6.65021324151793454203.jpg'},
            {Nombre: 'Arryn', year: 2003, motivo: 'Ave', image: 'https://banner2.kisspng.com/20180319/ayq/kisspng-emblem-symbol-brand-logo-arryn-5ab080e3b89221.545399561521516771756.jpg'},
            {Nombre: 'Martell', year: 2004, motivo: 'Sol con espada', image: 'https://banner2.kisspng.com/20180504/ihw/kisspng-flag-of-uruguay-sun-of-may-5aecce4b3593b2.1872094515254687472195.jpg'},
            {Nombre: 'Greyjoy', year: 2005, motivo: 'Kraken', image: 'https://banner2.kisspng.com/20180424/que/kisspng-theon-greyjoy-euron-greyjoy-aeron-greyjoy-a-game-o-posters-flowers-background-5adff5fdd886f5.1479154815246269418869.jpg'},
            {Nombre: 'Dragons', year: 2006, motivo: 'Estan poderosos', image: 'https://banner2.kisspng.com/20180205/wzq/kisspng-eragon-smaug-dragon-daenerys-targaryen-flying-dragon-transparent-png-5a79118eb65501.4877993015178837907468.jpg'},
            {Nombre: 'Iron Throne', year: 2007, motivo: 'Todos lo quieren', image: 'https://banner2.kisspng.com/20180713/qis/kisspng-daenerys-targaryen-game-of-thrones-iron-throne-7-game-of-trones-5b4900ad21ea60.4370477715315109571389.jpg'}
        ];
   }

  ngOnInit() {

  }

}
