import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Perfil } from '../model/perfil';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  //Direccion base
  urlBASE=environment.apiURL;

  //direccion para api de consultas
  baseURL = environment.apiURL;

  constructor(private http:HttpClient) { }

//con observable
getAll(): Observable<any>{
  const url = this.baseURL;
  return this.http.get<Perfil[]>(url+'api/consultas');
}


//get curriculums
getCurriculums(){
  const path=  this.baseURL+'api/consultas';
  return this.http.get<Perfil[]>(path); 
}

//obtener un curriculum
getCurriculum(id:string){
  const url = this.baseURL;
  return this.http.get(url+'api/consultas/'+id);
}

//agregar perfil
addPerfil(perfil:Perfil){
  return this.http.post(this.baseURL + 'api/agregar', perfil);
}

//Eliminar
deletePerfil(id:string){
  const path=  this.baseURL+'api/eliminar/'+id;
  return this.http.delete(path);

}

//Modificar
editPerfil(id:string,perfil:Perfil){
  const path=  this.baseURL+'api/modificar/'+id;
  return this.http.put(path,perfil)
}
//Modificar Likes
editLikes(id:string,perfil:Perfil){
  const path=  this.baseURL+'api/modificarlikes/'+id;
  return this.http.put(path,perfil)
}

//Modificar Dislikes
editDislikes(id:string,perfil:Perfil){
  const path=  this.baseURL+'api/modificardislikes/'+id;
  return this.http.put(path,perfil)
}
}

