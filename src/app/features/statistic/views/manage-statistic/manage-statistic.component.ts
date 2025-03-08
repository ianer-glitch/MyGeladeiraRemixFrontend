import { Component } from '@angular/core';
import { SustentabilityGraphComponent } from "../../components/sustentability-graph/sustentability-graph.component";
import { SustentabilityItemRecomendationComponent } from "../../../fridge/components/sustentability-item-recomendation/sustentability-item-recomendation.component";
import { PageTitleComponent } from "../../../../shared/components/atoms/page-title/page-title.component";

@Component({
  selector: 'app-manage-statistic',
  imports: [SustentabilityGraphComponent, SustentabilityItemRecomendationComponent, PageTitleComponent],
  templateUrl: './manage-statistic.component.html',
  styleUrl: './manage-statistic.component.css'
})
export class ManageStatisticComponent {

}
