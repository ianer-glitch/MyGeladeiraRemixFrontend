import { Component } from '@angular/core';
import { AdminHomeItemListComponent } from "../../components/admin-home-item-list/admin-home-item-list.component";

@Component({
  selector: 'app-admin-home',
  imports: [AdminHomeItemListComponent],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {

}
