import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from "./shared/components/molecules/footer/footer.component";
import { SpeedDialComponent } from "./shared/components/atoms/speed-dial/speed-dial.component";
import { ChipComponent } from './shared/components/atoms/chip/chip.component';
import { ConfirmationButtonsComponent } from "./shared/components/molecules/confirmation-buttons/confirmation-buttons.component";
import { PopupComponent } from "./shared/components/atoms/popup/popup.component";
import { FormsModule } from '@angular/forms';
import { ConfirmationPopupComponent } from './shared/components/organisms/confirmation-popup/confirmation-popup.component';
import { ListTemComponent } from "./shared/components/atoms/list-tem/list-tem.component";
import { IconInfoComponent } from "./shared/components/molecules/icon-info/icon-info.component";
import { InputTextComponent } from './shared/components/organisms/input-text/input-text.component';
import { InputSelectComponent } from "./shared/components/organisms/input-select/input-select.component";


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ButtonModule,
    FooterComponent,
    SpeedDialComponent,
    ChipComponent, ButtonModule,
    ConfirmationButtonsComponent,
    PopupComponent, FormsModule, ConfirmationPopupComponent,
    ListTemComponent,
    IconInfoComponent,
    InputTextComponent,
    InputSelectComponent
],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  visible=false
  title = 'MyGeladeiraRemixFrontend';

}
