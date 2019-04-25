import { Component, OnInit } from '@angular/core';
import { BoatType } from '../shared/models/boatType.model';
import { BoatTypeForm } from './boatType.form';
import { BoatTypeService } from '../shared/services/boatType/boat-type.service';
import { BoatTypeCreate } from '../shared/models/boatType-create';
import { EditBoatTypeForm } from './editBoatType.form';
import { DeleteBoatTypeForm } from './deleteBoatType.form';

@Component({
  selector: 'app-boat-type-form',
  templateUrl: './boat-type-form.component.html',
  styleUrls: ['./boat-type-form.component.css']
})
export class BoatTypeFormComponent implements OnInit {
  public addBoatType: boolean = false;
  public editBoatType: boolean = false;
  public deleteBoatType: boolean = false;

  public boatTypes: BoatType[];

  public form: BoatTypeForm = new BoatTypeForm();
  public form2: EditBoatTypeForm = new EditBoatTypeForm();
  public form3: DeleteBoatTypeForm = new DeleteBoatTypeForm();

  public showMs: boolean = false;
  public showMs1: boolean = false;
  public showMs2: boolean = false;

  constructor(private boatTypeService: BoatTypeService) {}

  ngOnInit() {
    this.boatTypeService
      .getAllBoatTypes()
      .subscribe(boatTypes => (this.boatTypes = boatTypes));
  }

  public onFormSubmit() {
    const boatType: BoatTypeCreate = this.form.getModel();
    // alert(boatType.type + boatType.rentalPrice);
    this.boatTypeService.addBoatType(boatType).subscribe(() => {
      this.boatTypeService
        .getAllBoatTypes()
        .subscribe(boatTypes => (this.boatTypes = boatTypes));
    });
    this.showMs = true;
    this.form.reset();
  }

  public onFormSubmit1() {
    const editedBoatType: BoatType = this.form2.getModel();
    this.boatTypeService.editBoatType(editedBoatType).subscribe(() => {
      this.boatTypeService
        .getAllBoatTypes()
        .subscribe(boatTypes => (this.boatTypes = boatTypes));
    });
    this.showMs1 = true;
    this.form2.reset();
  }

  public onFormSubmit2() {
    const deletedBoatType: BoatType = this.form3.getModel();
    this.boatTypeService.deleteBoatType(deletedBoatType).subscribe(() => {
      this.boatTypeService
        .getAllBoatTypes()
        .subscribe(boatTypes => (this.boatTypes = boatTypes));
    });
    this.showMs2 = true;
    this.form3.reset();
  }

  public boatTypeEditBoatType() {
    this.editBoatType = !this.editBoatType;
  }

  public boatTypeAddBoatType() {
    this.addBoatType = !this.addBoatType;
  }

  public boatTypeDeleteBoatType() {
    this.deleteBoatType = !this.deleteBoatType;
  }

  public showMessage() {
    this.showMs = !this.showMs;
  }
  public showMessage1() {
    this.showMs1 = !this.showMs1;
    window.location.reload();
  }
  public showMessage2() {
    this.showMs2 = !this.showMs2;
  }
}
