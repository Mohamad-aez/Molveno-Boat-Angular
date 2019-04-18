import { Component, OnInit, Input } from '@angular/core';
import { Boat } from '../shared/models/boat.model';

@Component({
  selector: 'app-boats',
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.css']
})
export class BoatsComponent implements OnInit {
  @Input()
  public boat: Boat;

  constructor() {}

  ngOnInit() {}
}
