import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Cliente, ClienteApi } from '../shared/sdk';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cliente: Cliente;

  ngOnInit() {
    this.cliente = new Cliente();
  }


  constructor(public dialogRef: MatDialogRef<LoginComponent>,
              private clienteSrv: ClienteApi,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  onSubmit() {
    console.log("User: ", this.cliente);
    this.dialogRef.close();
  }

  verificaLogin() {
    this.clienteSrv.findOne({"where" : {"login" : this.cliente.login }})
      .subscribe((item:Cliente) => {
        console.log('Cliente: ' , item);
      })
  }
}
