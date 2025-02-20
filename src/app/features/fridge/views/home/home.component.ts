import { Component } from '@angular/core';
import { FooterComponent } from "../../../../shared/components/molecules/footer/footer.component";
import { HomeItemListComponent } from "../../components/home-item-list/home-item-list.component";


@Component({
  selector: 'app-home',
  imports: [FooterComponent, HomeItemListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
