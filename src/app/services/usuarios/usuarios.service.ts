import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    protected http: HttpClient
  ) { }
  add(usr: any): Observable<any> {
    let ruta = [environment.apiUrl, 'usuarios'].join('/');
    return this.http.post(ruta, usr);
  }
  getById(id : any): Observable<any> {
    let ruta = [environment.apiUrl, 'usuarios',id].join('/');
    return this.http.get(ruta);
  }
}
