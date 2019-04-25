import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { BoatsComponent } from './boats/boats.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CreateTripFormComponent } from './create-trip-form/create-trip-form.component';
import { StartTripFormComponent } from './start-trip-form/start-trip-form.component';
import { BoatTypeFormComponent } from './boat-type-form/boat-type-form.component';
import { TripsComponent } from './trips/trips.component';
import { MainComponent } from './main/main.component';
import { TripsManagementFormComponent } from './trips-management-form/trips-management-form.component';
import { TripViewComponent } from './trip-view/trip-view.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    BoatsComponent,
    CreateTripFormComponent,
    StartTripFormComponent,
    BoatTypeFormComponent,
    TripsComponent,
    MainComponent,
    TripsManagementFormComponent,
    TripViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
