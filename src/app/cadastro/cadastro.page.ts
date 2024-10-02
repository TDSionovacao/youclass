import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {

  birthDate: string;  // Variável para armazenar a data de nascimento

  constructor() {
    this.birthDate = ''; // Inicializa a data como uma string vazia
  }

  // Função para aplicar a máscara na data de nascimento
  maskDate(event: any) {
    let input = event.target.value.replace(/\D/g, ''); // Remove tudo que não é número
    if (input.length >= 2) {
      input = input.slice(0, 2) + '/' + input.slice(2); // Adiciona a barra após o dia
    }
    if (input.length >= 5) {
      input = input.slice(0, 5) + '/' + input.slice(5, 9); // Adiciona a barra após o mês
    }
    event.target.value = input; // Define o valor do input com a máscara
  }
}
