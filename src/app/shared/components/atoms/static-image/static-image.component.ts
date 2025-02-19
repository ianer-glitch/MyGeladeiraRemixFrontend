import { Component, Input } from '@angular/core';

@Component({
  selector: 'static-image',
  imports: [],
  templateUrl: './static-image.component.html',
  styleUrl: './static-image.component.css'
})
export class StaticImageComponent {
  @Input() name:string= ""
  @Input() alt:string = ""
  @Input() width:string =""
  @Input() height:string = ""
  

  src:string = "./imgs/"
}
