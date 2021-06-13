import { Component } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';

  buttonName = "My button"
  i = 0;

  name = 'Marcelo';

  pessoa = {
    nome: 'Marcelo',
    sobrenome: 'Santana'
  }

  corAmarela: string = "#fffd63";

  btnDisabled = true;
  btnEnabled = true;

  spinnerMode: ProgressSpinnerMode = "determinate";

  selectDisabled = false;

  inputName = 'Marcelo';

  save() {
    console.log("Salvo!!")
  }

  incrementar() {
    this.i++;
    this.buttonName = "It was clicked " + this.i + " times";
  }

  disable() {
    this.btnEnabled = false;
    this.spinnerMode = 'indeterminate';
    setTimeout(() => {
      this.btnEnabled = true;
      this.spinnerMode = 'determinate';
    }, 3000);

  }

  cbChange(event){
    console.log(event.checked);
    this.selectDisabled = event.checked;
  }
}
