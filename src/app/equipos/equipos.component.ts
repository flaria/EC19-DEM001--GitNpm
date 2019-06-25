import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  teams: any[];

  constructor() {
    this.teams = [
      { sport: 'futbol soccer', year: '1927', brand: 'seleccion_mexicana', reason: 'Es mi pais' },
      { sport: 'futbol soccer', year: '1920', brand: 'seleccion_española', reason: 'Me gusta su estilo de juego' },
      { sport: 'futbol soccer', year: '1908', brand: 'seleccion_alemana', reason: 'Juegan bien' },
      { sport: 'futbol soccer', year: '1898', brand: 'seleccion_italiana', reason: 'Tiene buenos medio campistas' },
      { sport: 'futbol soccer', year: '1914', brand: 'seleccion_brasileña', reason: 'Hacen buenas jugadas individuales' },
      { sport: 'futbol soccer', year: '1991', brand: 'seleccion_ucrania', reason: 'Casi no son conocidos' },
      { sport: 'futbol soccer', year: '1914', brand: 'seleccion_portugal', reason: 'Por que dicen que no son nada sin ronaldo' },
      { sport: 'futbol soccer', year: '1901', brand: 'seleccion_argentina', reason: 'Juega bien messi' },
      { sport: 'futbol soccer', year: '1899', brand: 'barcelona', reason: 'Tienen buen toque' },
      { sport: 'futbol soccer', year: '1902', brand: 'real_madrid', reason: 'Crean buenas jugadas' },
    ];
  }


  ngOnInit() {
  }

}
