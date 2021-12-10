import { Component, OnInit } from '@angular/core';
//importo el servicio
import { ServicioService } from 'src/app/SERVICES/servicio.service';
import { Router} from '@angular/router';
import { PerfilComponent } from '../perfil/perfil.component';
import { Perfil } from 'src/app/model/perfil';


@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})



export class ConsultasComponent implements OnInit {
  perfiles: Perfil[];
constructor(private ServicioService: ServicioService, private router:Router) { 
  this.perfiles=[];
  
}
  
 
  ngOnInit() {

    this.listarPerfil();

  }

  obtenerPerfiles(){
    this.ServicioService.getAll()
    .subscribe(Perfil =>{
      console.log(Perfil);
    });
  }

  listarPerfil()
  {
    this.ServicioService.getCurriculums().subscribe(
      res=>{
        console.log(res);
        this.perfiles=<any>res;
      },
      err => console.log(err)
    );
  }


  eliminar(id:string)
  {
    this.ServicioService.deletePerfil(id).subscribe(
      res=>{
        console.log('Perfil eliminado');
        this.listarPerfil();
      },
      err=> console.log(err)
      );
  }

  modificar(id:string){
    this.router.navigate(['/modificacion/'+id]);
  }

  consultita(id:String){
    this.router.navigate(['/perfil/'+id])
  }

  

}
