import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.scss']
})
export class TwoWayComponent implements OnInit {

  name1: string = "1";
  name2: string = "2";

  client = {
    firstName: 'Marcelo',
    lastName: 'Marques',
    addres: 'Route',
    age: '25'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
