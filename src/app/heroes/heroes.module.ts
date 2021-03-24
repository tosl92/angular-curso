import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],

    exports:[
        ListadoComponent
    ],
    imports:[

        // En los imports solo se importan Modulos
        
        CommonModule //APORTA LAS LIBRERIAS PARA EL  ngFor y el ngIF
    ]

})

export class HeroesModule{}