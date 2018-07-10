import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { Principal2Component } from '../principal2/principal2.component';

export const routes: Routes = [
    { path: 'home',  component: HomeComponent },
    { path: 'principal',  component: Principal2Component },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
    
  ];