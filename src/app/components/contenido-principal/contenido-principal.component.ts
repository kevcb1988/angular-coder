import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-contenido-principal',
  templateUrl: './contenido-principal.component.html',
  styleUrls: ['./contenido-principal.component.css']
})
export class ContenidoPrincipalComponent implements OnInit {

  estudiantes: Array<Estudiante> = [
    {
      nombre: 'Yazmín Erazo', 
      carrera: 'Diseño Gráfico',
      mensaje: "Aprobado",
      estado: true,
    },
    {
      nombre: 'Sebastian Chaparro', 
      carrera: 'Desarrollo de Software',
      mensaje: "Aprobado",
      estado: true,
    },
    {
      nombre: 'Lana Lang', 
      carrera: 'Pedagogía',
      mensaje: "En proceso",
      estado: false,
    },
    {
      nombre: 'Sherlock Holmes', 
      carrera: 'Investigación',
      mensaje: "Aprobado",
      estado: true,
    },
    {
      nombre: 'Keven Chaparro', 
      carrera: 'Desarrollo de Software',
      mensaje: "En proceso",
      estado: false,
    },
  ]

  constructor() {

  }

  ngOnInit(): void {
  }

}
