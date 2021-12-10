import { Component } from '@angular/core';
import { ServicioService } from './SERVICES/servicio.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ServicioService]
})
export class AppComponent {
  title = 'cv';
  constructor(private datasvc:ServicioService){}

  ngOnInit(){
    this.datasvc.getAll().subscribe(
      res=>{
        console.log('Res',res);
      }
    )
  }
  
}
