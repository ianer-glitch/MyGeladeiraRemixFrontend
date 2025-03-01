import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'generic-list-item',
  imports: [CommonModule],
  templateUrl: './generic-list-item.component.html',
  styleUrl: './generic-list-item.component.css'
})
export class GenericListItemComponent {
  imageSrc=input("")
  text=input("")
  backgroundColor=input("var(--accent-color-lighter)")
}
