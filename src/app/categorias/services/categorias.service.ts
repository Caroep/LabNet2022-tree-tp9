import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  endpoint: string = 'categories';
  constructor(private http: HttpClient) { }

  public addCategoria(categoriaRequest: Categoria): Observable<any>{ 
    let url = environment.apiCategorias + this.endpoint;
    return this.http.post(url,categoriaRequest);
  }

  public mostrarCategorias(): Observable<Array<Categoria>>{
    let url = environment.apiCategorias + this.endpoint;
    return this.http.get<Array<Categoria>>(url);
  }

  public borrarCategorias(id: number): Observable<any>{
    let url = environment.apiCategorias + this.endpoint + "/" + id;
    return this.http.delete(url);
  }

  public updateCategoria(categoriaRequest: Categoria): Observable<any>{ 
    let url = environment.apiCategorias + this.endpoint;
    return this.http.put(url,categoriaRequest);
  }
}
