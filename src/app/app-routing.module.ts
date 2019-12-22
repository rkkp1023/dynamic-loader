import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsingDirectiveComponent } from './using-directive/using-directive.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'using-directive', component: UsingDirectiveComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
