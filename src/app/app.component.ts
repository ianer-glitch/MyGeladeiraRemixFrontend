import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PrimeIconComponent } from './shared/components/atoms/prime-icon/prime-icon.component';
import { FooterComponent } from "./shared/components/molecules/footer/footer.component";
import { InputTextComponent } from "./shared/components/atoms/input-text/input-text.component";
import { SpeedDialComponent } from "./shared/components/atoms/speed-dial/speed-dial.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, PrimeIconComponent, FooterComponent, InputTextComponent, SpeedDialComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyGeladeiraRemixFrontend';
}
