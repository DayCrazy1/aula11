import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor(
    protected http:HttpClient
  ) {  }

  getEndereco(cep){
    return this.http.get("https://viacep.com.br/ws/"+cep+"/json/")
  }
}
