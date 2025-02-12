import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FooterComponent } from "./shared/components/molecules/footer/footer.component";
import { InputTextComponent } from "./shared/components/atoms/input-text/input-text.component";
import { SpeedDialComponent } from "./shared/components/atoms/speed-dial/speed-dial.component";
import { ChipComponent } from './shared/components/atoms/chip/chip.component';

@Component({
  selector: 'app-root',
  imports: [
     RouterOutlet,
     ButtonModule,
     FooterComponent,
     InputTextComponent,
     SpeedDialComponent,
     ChipComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyGeladeiraRemixFrontend';
}
