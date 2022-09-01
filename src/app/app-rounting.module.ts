import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRountingModule } from './auth/auth.routing';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesRountingModule } from './pages/pages.routing';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', component: NopagefoundComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRountingModule,
    AuthRountingModule
  ], 
  exports: [
    RouterModule
  ]
})
export class AppRountingModule { }
