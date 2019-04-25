import { Component, OnInit } from '@angular/core';
import { Boat } from '../shared/models/boat.model';
import { BoatType } from '../shared/models/boatType.model';
import { BoatForm } from './boat.form';
import { BoatService } from '../shared/services/boatService/boat.service';
import { BoatTypeService } from '../shared/services/boatType/boat-type.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public boats: Boat[] = [];
  public boat: Boat;
  public boatTypes: BoatType[] = [];
  public boatType: BoatType;

  public form: BoatForm = new BoatForm();
  // public form2: BoatTypeForm = new BoatTypeForm();

  constructor(
    private boatService: BoatService,
    private boatTypeService: BoatTypeService,
    public router: Router
  ) {}

  ngOnInit() {
    this.boatService.getAllBoats().subscribe(boats => (this.boats = boats));
    this.boatTypeService
      .getAllBoatTypes()
      .subscribe(boatTypes => (this.boatTypes = boatTypes));
  }

  public onFormSubmit() {
    const boat: Boat = this.form.getModel();

    this.boatService.addBoat(boat).subscribe(() => {
      this.boatService.getAllBoats().subscribe(boats => (this.boats = boats));
      this.router.navigate(['/', 'boats-overview']);
    });
  }
}
