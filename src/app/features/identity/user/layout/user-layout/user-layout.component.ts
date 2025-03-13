import { Component } from '@angular/core';
import { FooterComponent } from "../../../../../shared/components/molecules/footer/footer.component";
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-user-layout',
  imports: [FooterComponent,RouterOutlet],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.css'
})
export class UserLayoutComponent {

}
