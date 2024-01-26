import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './components/home-one/home-one.component';

const routes: Routes = [
    { path: 'acceuil', component: HomeOneComponent },
    
    { path: '**', redirectTo: '/acceuil', pathMatch: 'full' }
  ];
  
@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }