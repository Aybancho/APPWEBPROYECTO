import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltasComponent } from './components/altas/altas.component';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { ModifiacionesComponent } from './components/modifiaciones/modifiaciones.component';
import { PerfilComponent } from './components/perfil/perfil.component';

// Rutas para acceder a la vista de otros componentes
const routes: Routes = [
  {
    component:ConsultasComponent,
    path:'consulta'
  },
  {
    component:AltasComponent,
    path:'alta'
  },
  {
    component:ModifiacionesComponent,
    path:'modificacion/:id'
  }, 
  {
    component:PerfilComponent,
    path:'perfil/:id'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
