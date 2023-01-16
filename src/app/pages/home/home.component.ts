import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  personas:{nombre:string, apellido:string, carrera:string}[]=[]
  nombre='';
  apellido='';
  carrera='';
  
  eliminar(id:number){
    this.personas.splice(id,1)
}

  registrar(){
    this.personas.push({'nombre':this.nombre, 'apellido':this.apellido, 'carrera':this.carrera})

    this.nombre = "";
    this.apellido = "";
    this.carrera = "";
  }
}
