import { Component } from '@angular/core';
import {Equipo} from './equipo';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angularTest2';

  equipos: Equipo[];

    constructor(private messageService: MessageService) {
        this.equipos = [
            {archivo: 'Florida', nombre:'Florida Flamingos', liga:'World Team Tennis'}
        ];
    }

    selectCar(equipo: Equipo) {
        this.messageService.add({severity: 'info', summary: 'Car Selected', 
          detail: 'nombre:' + equipo.nombre});
    }
}
