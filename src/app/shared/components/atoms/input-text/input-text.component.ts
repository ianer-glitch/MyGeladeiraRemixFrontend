import { Component, Input } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'input-text',
  imports: [InputTextModule],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.css'
})
export class InputTextComponent {
@Input() id:string = ""
@Input() label:string = ""
@Input() fluid:boolean = false
}
