import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ahorcado';

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
  'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  palabra = "AGUACATE";

  palabraOculta = "";
  
  intentos = 0; 

  gane = false;

  perdio = false;

  constructor(){
    this.palabraOculta = "_ ".repeat(this.palabra.length)
    
  }
  comprobar(letra) {

    this.existeLetra(letra);

    const palabraOcultaArr = this.palabraOculta.split(' ');

    for (let i = 0; i < this.palabra.length; i++) {
      if (this.palabra[i] === letra) {
        palabraOcultaArr[i] = letra;
      }
    }
    this.palabraOculta = palabraOcultaArr.join(' '); 
    this.verificaGane();
  }

  verificaGane () {
    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join('');

    if(palabraEvaluar === this.palabra) {
      this.gane = true;
    } 

    if (this.intentos >= 9) {
      this.perdio = true;
    }
  }

  existeLetra ( letra ) {
    if ( this.palabra.indexOf(letra) >= 0) {
      // console.log('LETRA EXISTE' + letra)
    } else {
      // console.log('LETRA NO EXISTE' + letra)
      this.intentos ++;
    }
  }
}
