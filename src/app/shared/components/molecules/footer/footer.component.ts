import { Component } from '@angular/core';
import { PrimeIconComponent } from "../../atoms/prime-icon/prime-icon.component";
import { AdsContainerComponent } from "../../atoms/ads-container/ads-container.component";

@Component({
  selector: 'app-footer',
  imports: [PrimeIconComponent, AdsContainerComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
