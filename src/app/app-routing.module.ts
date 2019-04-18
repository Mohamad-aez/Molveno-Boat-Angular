import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { BoatsComponent } from './boats/boats.component';

const routes: Routes = [
  {
    path: 'admin',
    component: FormComponent
  },
  {
    path: 'boat',
    component: BoatsComponent
  },
  {
    path: '**',
    redirectTo: 'admin'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
