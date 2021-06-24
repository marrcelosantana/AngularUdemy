import { Component, Input, OnInit } from '@angular/core';
import { Clients } from 'src/app/_models/clients';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  @Input()
  client: Clients;

  constructor() { }

  ngOnInit(): void {
  }

}
