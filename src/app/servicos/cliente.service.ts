import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Cliente{
  id: number;
  nome: string;
  telefone: string;
  endereco: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url = 'http://localhost/apiAppCrud/apiCliente';

  constructor(private htpp: HttpClient) { }
}