import { Component, ViewEncapsulation } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'sidebar',
  imports: [DrawerModule],
  encapsulation:ViewEncapsulation.None,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  visible:boolean = true
}
