import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  formularioInfo: FormGroup = new FormGroup({})

  constructor() {

  }

  ngOnInit(): void {
    this.formularioInfo = new FormGroup(
      {
        nombre: new FormControl('', [
          Validators.required,
          Validators.minLength(6)
        ]),
        correo: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        comentario: new FormControl('', [
          Validators.required,
          Validators.minLength(10)
        ]),
        programa: new FormControl('', [
          Validators.required,
        ]),
      }
    )
  }

  get nombreNoValido(){
    return this.formularioInfo.get('nombre')?.invalid && this.formularioInfo.get('nombre')?.touched
  }

  get correoNoValido(){
    return this.formularioInfo.get('correo')?.invalid && this.formularioInfo.get('correo')?.touched
  }

  get comentarioNoValido(){
    return this.formularioInfo.get('comentario')?.invalid && this.formularioInfo.get('comentario')?.touched
  }

  get programaNoValido(){
    return this.formularioInfo.get('programa')?.invalid && this.formularioInfo.get('programa')?.touched
  }

  enviarComentario(): void{
    const informacionFormulario = this.formularioInfo.value;
    console.log(informacionFormulario)
  }

}
