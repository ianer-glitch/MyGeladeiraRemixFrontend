import { Component, Input, input, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SpeedDialModule } from 'primeng/speeddial';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'speed-dial',
  imports: [SpeedDialModule, ButtonModule,CommonModule],
  templateUrl: './speed-dial.component.html',
  styleUrl: './speed-dial.component.css',
  encapsulation:ViewEncapsulation.None
})
export class SpeedDialComponent {
 @Input() items: MenuItem[] = []
}
