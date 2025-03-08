import { Component, input } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';



@Component({
  selector: 'skeleton',
  imports: [SkeletonModule],
  templateUrl: './skeleton.component.html',
  styleUrl: './skeleton.component.css'
})
export class SkeletonComponent {
 shape=input<string>("")
 width=input<string>("")
 height=input<string>("")
 borderRadius=input<string>("")
}
