import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  tituloValor1 = 'Exibir Produtos';
  tituloValor2 = 'Receber Pedidos'

  title = 'app';

  ngOnInit() {
    console.log('Ola Mundo');
  }

  exibeItem() {
    console.log('Exibe Item');
  }
}
