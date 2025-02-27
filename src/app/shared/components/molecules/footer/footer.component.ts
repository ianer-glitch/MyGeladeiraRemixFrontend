import { Component } from '@angular/core';
import { PrimeIconComponent } from "../../atoms/prime-icon/prime-icon.component";
import { AdsContainerComponent } from "../../atoms/ads-container/ads-container.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [PrimeIconComponent, AdsContainerComponent, SidebarComponent,FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  visible:boolean = false
}
