import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ToastComponent } from "./shared/components/atoms/toast/toast.component";


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ButtonModule,
    ButtonModule,
    FormsModule,
    ToastComponent
],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  visible=false
  title = 'MyGeladeiraRemixFrontend';
  value:number=0

}
