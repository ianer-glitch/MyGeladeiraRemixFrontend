import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PrimeIconComponent } from './shared/components/atoms/prime-icon/prime-icon.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ButtonModule,PrimeIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyGeladeiraRemixFrontend';
}
