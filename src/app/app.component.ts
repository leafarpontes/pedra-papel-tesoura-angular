import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // variáveis

  public computerResult:string;

  public result:string;

  public results = { computer: 0, player: 0 }; // contador (score)

  public userResult:string;
  
  // método de jogar (que é chamado no botão do HTML)
  public play(action:string):void {
    console.log("USER: ", action);
    this.userResult = action;
    this.computer();
    this.calculateWinner();
  }

  private computer():void {
    const randomNumber = Math.floor(Math.random() * 3); // gera um número aleatório de 0 a 2
    const options: string[] = ['pedra', 'papel', 'tesoura']; // opções a serem escolhidas

    console.log("COMPUTER: ", options[randomNumber]);
    this.computerResult = options[randomNumber];
  }

  private calculateWinner():void {
    const mostraResultado = document.querySelector('footer');

    if (this.userResult === this.computerResult) {
      this.result = "Empate!!"; // msg que aparece na tela quando dá empate
      mostraResultado.style.backgroundColor = '#9980FA';
    }

    if (this.userResult === 'pedra' && this.computerResult === 'papel') {
      this.results.computer++; // acrescenta no contador caso o computador vença
      this.result = 'O Computador venceu! :O';
      mostraResultado.style.backgroundColor = '#eb4d4b'; // altera cor de fundo do footer para vermelho caso o computador vença
    }
    if (this.userResult === 'pedra' && this.computerResult === 'tesoura') {
      this.results.player++; // acrescenta no contador caso o usuário vença
      this.result = 'Você venceu!';
      mostraResultado.style.backgroundColor = '#00b894'; // altera cor de fundo do footer para verde caso o usuário vença
    }
    if (this.userResult === 'papel' && this.computerResult === 'pedra') {
      this.results.player++;
      this.result = 'Você venceu!';
      mostraResultado.style.backgroundColor = '#00b894';
    }
    if (this.userResult === 'papel' && this.computerResult === 'tesoura') {
      this.results.computer++;
      this.result = ' O computador venceu! :O';
      mostraResultado.style.backgroundColor = '#eb4d4b';
    }
    if (this.userResult === 'tesoura' && this.computerResult === 'pedra') {
      this.results.computer++;
      this.result = ' O computador venceu! :O';
      mostraResultado.style.backgroundColor = '#eb4d4b';
    }
    if (this.userResult === 'tesoura' && this.computerResult === 'papel') {
      this.results.player++;
      this.result = ' Você venceu!';
      mostraResultado.style.backgroundColor = '#00b894';
    }
  }
}
