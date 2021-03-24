import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes:string[] = ['Spiderman', 'Hulk', 'Ironman', 'Thor'];
  heroeBorrado: string = '';
  

  borrarHeroe(){
  //  const heroeBorrado = this.heroes.splice(0,1);

    this.heroeBorrado = this.heroes.shift() || '';
  }
  

}
