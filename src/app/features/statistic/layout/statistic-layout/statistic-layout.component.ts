import { Component } from '@angular/core';
import { FooterComponent } from "../../../../shared/components/molecules/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-statistic-layout',
  imports: [FooterComponent,RouterOutlet],
  templateUrl: './statistic-layout.component.html',
  styleUrl: './statistic-layout.component.css'
})
export class StatisticLayoutComponent {

}
