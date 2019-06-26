import { Component } from '@angular/core';
import {Equipo} from './equipo';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService],
})

export class AppComponent {
  title = 'angularTest2';

  equipos: Equipo[];

    constructor(private messageService: MessageService) {
        this.equipos = [
            {archivo: 'Florida', nombre:'Florida Flamingos', liga:'World Team Tennis'},
            {archivo: 'Soviets', nombre:'The Soviets', liga:'World Team Tennis'},
            {archivo: 'Cosmos', nombre:'New York Cosmos', liga:'North American Soccer League'},
            {archivo: 'Seattle', nombre:'Seattle Seawolves', liga:'Major League Rugby'},
            {archivo: 'SanDiego', nombre:'San Diego Sockers', liga:'Major Indoor Soccer League'},
            {archivo: 'Kentucky', nombre:'Kentucky Colonels', liga:'American Basketball Association'},
            {archivo: 'Cordoba', nombre:'Cafeteros de Córdoba', liga:'Liga Mexicana de Beisbol'},
            {archivo: 'Monterrey', nombre:'Sultanes de Monterrey', liga:'Liga Mexicana de Beisbol'},
            {archivo: 'NewYork', nombre:'New York Apples', liga:'World Team Tennis'},
            {archivo: 'Denver', nombre:'Denver Nuggets', liga:'National Basketball Association'}
        ];
    }

    selectCar(equipo: Equipo) {
        this.messageService.add({severity: 'info', summary: 'Equipo Seleccionado', 
          detail: 'nombre:' + equipo.nombre});
    }
}
