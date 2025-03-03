import { Component, Input, input, output, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SpeedDialModule } from 'primeng/speeddial';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { PrimeIconComponent } from "../prime-icon/prime-icon.component";

@Component({
  selector: 'speed-dial',
  imports: [SpeedDialModule, ButtonModule, CommonModule, PrimeIconComponent],
  templateUrl: './speed-dial.component.html',
  styleUrl: './speed-dial.component.css',
  encapsulation:ViewEncapsulation.None
})
export class SpeedDialComponent {
  items =  input<MenuItem[]>([]) 
  onShow = output()
  onHide = output()
}
