import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { BoatsComponent } from './boats/boats.component';
import { CreateTripFormComponent } from './create-trip-form/create-trip-form.component';
import { StartTripFormComponent } from './start-trip-form/start-trip-form.component';
import { BoatTypeFormComponent } from './boat-type-form/boat-type-form.component';
import { MainComponent } from './main/main.component';
import { TripsManagementFormComponent } from './trips-management-form/trips-management-form.component';
import { TripViewComponent } from './trip-view/trip-view.component';
import { TripsComponent } from './trips/trips.component';

const routes: Routes = [
  {
    path: 'Trips-Management',
    component: TripsManagementFormComponent
  },
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'boattype-management',
    component: BoatTypeFormComponent
  },
  {
    path: 'boat-management',
    component: FormComponent
  },
  {
    path: 'boat',
    component: BoatsComponent
  },
  {
    path: 'trip-reservation',
    component: CreateTripFormComponent
  },
  {
    path: 'start-trip',
    component: StartTripFormComponent
  },
  {
    path: 'trips-overview',
    component: TripsComponent
  },
  {
    path: 'boats-overview',
    component: BoatsComponent
  },
  {
    path: ':id',
    component: TripViewComponent
  },
  // {
  //   path: ':id',
  //   component: BoatViewComponent ///////
  // },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
