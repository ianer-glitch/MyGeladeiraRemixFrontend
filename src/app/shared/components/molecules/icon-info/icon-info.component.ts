import { Component, Input, input, ViewEncapsulation } from '@angular/core';
import { PrimeIconComponent } from "../../atoms/prime-icon/prime-icon.component";
import { TooltipModule } from 'primeng/tooltip';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'icon-info',
  imports: [PrimeIconComponent,TooltipModule,CommonModule],
  templateUrl: './icon-info.component.html',
  styleUrl: './icon-info.component.css',
  encapsulation:ViewEncapsulation.None
})
export class IconInfoComponent {
  @Input() information:string =""
  @Input() infoPosition:string =""
}
