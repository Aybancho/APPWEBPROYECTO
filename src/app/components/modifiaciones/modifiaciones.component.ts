import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/model/perfil';
import { ServicioService } from 'src/app/SERVICES/servicio.service';
import { Router,ActivatedRoute } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'app-modifiaciones',
  templateUrl: './modifiaciones.component.html',
  styleUrls: ['./modifiaciones.component.css']
})
export class ModifiacionesComponent implements OnInit {
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
    const id_entrada= <string>this.activatedRoute.snapshot.params['id'];
    console.log('id de entrada'+id_entrada)

    if(id_entrada){
      this.ServicioService.getCurriculum(id_entrada).subscribe(
        res=>{
          this.perfil = res[0];
          console.log(res[0]);
        },
        err=>console.log(err)
      );
    }
  }

  modificar(){
   this.ServicioService.editPerfil(this.perfil.id, this.perfil).subscribe(
     res=>{
       console.log(res);
     },
     err=>console.log(err)
   );
   this.router.navigate(['/consulta']);
  }

}
