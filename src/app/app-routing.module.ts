  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { LoginComponent } from './auth/login/login.component';
  import { RegisterComponent } from './auth/register/register.component';
  import { AddClientComponent } from './clients/add-client/add-client.component';
  import { ClientParentComponent } from './clients/client-parent/client-parent.component';
  import { ClientGridComponent } from './clients/client-grid/client-grid.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'add-client', component: AddClientComponent },  // For adding new client
  { path: 'clients', component: ClientParentComponent },   // Parent + grid inside
];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
