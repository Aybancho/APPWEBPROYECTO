import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-barra-navegador',
  templateUrl: './barra-navegador.component.html',
  styleUrls: ['./barra-navegador.component.css']
})
export class BarraNavegadorComponent implements OnInit {
public show: boolean = false;
public buttonName: any = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  alerta(){
    alert('hola');
  }



toggle() {
    this.show = !this.show;
    if(this.show)
        this.buttonName = false;
    else
        this.buttonName = true;
}

}
