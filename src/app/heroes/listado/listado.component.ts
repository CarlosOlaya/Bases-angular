import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes : string[] = ['Spiderman','Ironman','Hulk','DoctorStrange',];
  heroeBorrado= '';
  borrarHeroe (){
  this.heroeBorrado = this.heroes.shift() || '';
  }

}
