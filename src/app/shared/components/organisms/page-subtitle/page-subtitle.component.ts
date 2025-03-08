import { Component, input } from '@angular/core';
import { IconInfoComponent } from "../../molecules/icon-info/icon-info.component";

@Component({
  selector: 'page-subtitle',
  imports: [IconInfoComponent],
  templateUrl: './page-subtitle.component.html',
  styleUrl: './page-subtitle.component.css'
})
export class PageSubtitleComponent {
 information = input<string>("")
 infoPosition = input<string>("bottom")
}
