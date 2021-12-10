import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/model/perfil';
import { ServicioService } from 'src/app/SERVICES/servicio.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-altas',
  templateUrl: './altas.component.html',
  styleUrls: ['./altas.component.css']
})
export class AltasComponent implements OnInit {

  perfil:Perfil={
    id:'',
    nombre:'',
    apellido:'',
    edad:0,
    descripcion:'',
    breve_descripcion:'',
    imagen:'',
    likes:0,
    dislikes:0
  };
  constructor(private ServicioService: ServicioService,
              private router:Router,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  agregar(){
    this.ServicioService.addPerfil(this.perfil).subscribe();
    this.router.navigate(['/consulta']);
  }

}
