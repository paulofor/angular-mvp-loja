import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule, MatInputModule, MatToolbarModule, MatDialogModule, MatButtonModule } from '@angular/material';

import { HttpClient, HttpResponse, HttpClientModule, HttpHandler } from '@angular/common/http';
import { SocketConnection } from './shared/sdk/sockets/socket.connections';
import { SocketDriver } from './shared/sdk/sockets/socket.driver';
import { SDKModels } from './shared/sdk/services/custom/SDKModels';
import { LoopBackAuth } from './shared/sdk/services/core/auth.service';
import { InternalStorage } from './shared/sdk/storage/storage.swaps';


import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ClienteApi, ProdutoApi, ItemPedidoApi, PedidoApi } from './shared/sdk';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { Principal2Component } from './principal2/principal2.component';



@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    LoginComponent,
    HomeComponent,
    Principal2Component
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule ,
    AppRoutingModule

  ],
  providers: [
    ClienteApi,
    ProdutoApi,
    PedidoApi,
    ItemPedidoApi,
    HttpClient, 
    SocketConnection  , 
    SocketDriver,
    SDKModels,
    LoopBackAuth,
    InternalStorage
  ],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent]
})
export class AppModule { }
