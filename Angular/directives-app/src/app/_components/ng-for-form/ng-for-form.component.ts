import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.scss']
})
export class NgForFormComponent implements OnInit {

  name: string = "";
  address: string = "";
  phone: string = "";
  city: string = "";
  age: number = 0;

  cities = [
    {name: "São Paulo", uf: "SP"},
    {name: "Fortaleza", uf: "CE"},
    {name: "Rio de Janeiro", uf: "RJ"},
    {name: "Cariús", uf: "CE"},
  ]

  clients: any = [] = [];
  constructor() { }

  ngOnInit(): void {
  }

  cancel(){
    this.name = "";
    this.address = "";
    this.city = "";
    this.phone = "";
    this.age = 0;
  }

  save(){
    this.clients.push(
      {
        name: this.name,
        address: this.address,
        city: this.city,
        phone: this.phone,
        age: this.age
      }
    );
    this.cancel();
    console.log(this.clients)
  }

  delete(i: number){
    this.clients.splice(i, 1);
  }


}
