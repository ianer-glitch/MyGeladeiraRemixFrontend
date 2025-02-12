import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button',
  imports: [ButtonModule,CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
 @Input() fluid:boolean = false
 @Input() rounded:boolean = false
 @Input() type:string = ""
 @Input() label:string = ""
 @Input() primeIcon:string = ""
 @Input() severity: "success" 
                  | "info" 
                  | "warn" 
                  | "danger" 
                  | "help" 
                  | "primary" 
                  | "secondary" 
                  | "contrast" 
                  | null 
                  | undefined = undefined
}
