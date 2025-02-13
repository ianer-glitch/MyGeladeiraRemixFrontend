import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from "./shared/components/molecules/footer/footer.component";
import { FormsModule } from '@angular/forms';
import { InputSelectComponent } from "./shared/components/organisms/input-select/input-select.component";
import { InputNumberComponent } from "./shared/components/organisms/input-number/input-number.component";
import { InputNumberButtonsComponent } from "./shared/components/templates/input-number-buttons/input-number-buttons.component";


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ButtonModule,
    FooterComponent,
    ButtonModule,
    FormsModule,
    InputSelectComponent,
    InputNumberComponent,
    InputNumberButtonsComponent
],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  visible=false
  title = 'MyGeladeiraRemixFrontend';
  value:number=0

}
