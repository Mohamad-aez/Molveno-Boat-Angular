import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BoatDeatail } from '../shared/models/boatDetail.model';
import { BoatService } from '../shared/services/boatService/boat.service';

@Component({
  selector: 'app-boats',
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.css']
})
export class BoatsComponent implements OnInit {
  @Input()
  public boat: BoatDeatail;
  public allBoats: BoatDeatail[];

  constructor(
    public router: Router,
    private readonly boatService: BoatService
  ) {}

  ngOnInit() {
    this.getAllBoats();
  }

  public getAllBoats() {
    const boats$ = this.boatService.getAllBoats();
    boats$.subscribe(allBoats1 => {
      this.allBoats = allBoats1;
    });
  }
  onSlect(boat: BoatDeatail) {
    this.router.navigate(['/boat', boat.id]);
  }
}
