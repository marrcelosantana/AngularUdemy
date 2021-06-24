import { Component, Input, OnInit } from '@angular/core';
import { Clients } from 'src/app/_models/clients';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.scss']
})
export class InputBindingComponent implements OnInit {

  @Input()
  name: string;

  @Input()
  lastName: string;

  @Input()
  age: number;

  clients: Clients [];

  constructor() {
    this.clients = [
      {id: 1, name: "Bob", age: 30},
      {id: 2, name: "Mary", age: 22},
      {id: 3, name: "Mark", age: 20},
      {id: 4, name: "Lucy", age: 24},
    ]
   }

  ngOnInit(): void {
  }

}
