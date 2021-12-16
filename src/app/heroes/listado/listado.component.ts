import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['SpiderMan','IronMan', 'Hulk', 'Tor'];
  deletedHeroes: string[] = [''];
  eliminado: boolean = false;

  borrarHeroe(index: number){
    this.eliminado = true;
    this.deletedHeroes.push(this.heroes[index]);
    this.heroes.splice(index,1);
  }

}
