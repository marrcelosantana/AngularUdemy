import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputBindingComponent } from './_components/input-binding/input-binding.component';
import { ClientComponent } from './_components/input-binding/client/client.component';
import { EventComponent } from './_components/event/event.component';
import { ChildItemComponent } from './_components/event/child-item/child-item.component';
import { ClientsComponent } from './_components/clients/clients.component';

@NgModule({
  declarations: [
    AppComponent,
    InputBindingComponent,
    ClientComponent,
    EventComponent,
    ChildItemComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
