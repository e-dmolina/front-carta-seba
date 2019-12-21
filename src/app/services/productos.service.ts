import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productoModel } from '../models/producto.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  URL = 'http://localhost:3000/api';


  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get(`${this.URL}/productos`);
  }

  getPoducto(id: string) {
    return this.http.get(`${this.URL}/productos/${id}`)
  }

  getProdXCategoria(categoria:string){
    return this.http.get(`${this.URL}/productos/categoria/${categoria}`)
  }

  crearProducto(producto: productoModel) {
    return this.http.post(`${this.URL}/productos`, producto)
      .pipe(
        map((resp: any) => {
          producto = resp;
          return producto;
        })
      );
  }

  actualizarProducto(producto: productoModel) {
    return this.http.put(`${this.URL}/productos/${producto.id}`, producto)
  }

  eliminarProducto(id:string){
    return this.http.delete(`${this.URL}/productos/${id}`)
  }

  getCategorias() {
    return this.http.get(`${this.URL}/productos/categorias`);
  }
}
