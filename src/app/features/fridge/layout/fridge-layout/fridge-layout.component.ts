import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../../../shared/components/molecules/footer/footer.component";

@Component({
  selector: 'app-fridge-layout',
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './fridge-layout.component.html',
  styleUrl: './fridge-layout.component.css'
})
export class FridgeLayoutComponent {

}
