import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {

  names = ["Marcelo", "Nayara", "Beatriz", "Michel"]

  cities = [
    {name: "São Paulo", uf: "SP"},
    {name: "Ceará", uf: "CE"},
    {name: "Rio de Janeiro", uf: "RJ"},
    {name: "Cariús", uf: "CE"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
