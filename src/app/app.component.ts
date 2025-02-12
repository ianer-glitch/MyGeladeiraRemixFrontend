import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from "./shared/components/molecules/footer/footer.component";
import { SpeedDialComponent } from "./shared/components/atoms/speed-dial/speed-dial.component";
import { ChipComponent } from './shared/components/atoms/chip/chip.component';
import { ConfirmationButtonsComponent } from "./shared/components/molecules/confirmation-buttons/confirmation-buttons.component";
import { PopupComponent } from "./shared/components/atoms/popup/popup.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ButtonModule,
    FooterComponent,
    SpeedDialComponent,
    ChipComponent, ButtonModule,
    ConfirmationButtonsComponent,
    PopupComponent,FormsModule
],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  visible=false
  title = 'MyGeladeiraRemixFrontend';
}
