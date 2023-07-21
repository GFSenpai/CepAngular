import { Component } from '@angular/core';
import { CepServiceService } from './cep-service.service';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'CepAngular';
  isResult: boolean = false;

constructor(private cepsService: CepServiceService){}

consultaCep(valor:any, form:Form){
  this.cepsService.buscar(valor).subscribe((dados) => this.populaForm(dados, form));
}

populaForm(dados:any, form:any){
  form.setValue({
    cep: dados.cep,
    logradouro: dados.logradouro,
    bairro: dados.bairro,
    cidade: dados.localidade,
    uf: dados.uf,
    ibge: dados.ibge
  })
}
limparCEP(){
  this.isResult=false
}
}
