import { Component } from '@angular/core';
import { SustentabilityGraphComponent } from "../../components/sustentability-graph/sustentability-graph.component";
import { SustentabilityItemRecomendationComponent } from "../../../fridge/components/sustentability-item-recomendation/sustentability-item-recomendation.component";
import { PageTitleComponent } from "../../../../shared/components/atoms/page-title/page-title.component";
import { provideTranslocoScope, TranslocoDirective, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-manage-statistic',
  imports: [
    SustentabilityGraphComponent,
    SustentabilityItemRecomendationComponent,
    PageTitleComponent,
    TranslocoDirective
  ],
  templateUrl: './manage-statistic.component.html',
  styleUrl: './manage-statistic.component.css',
  providers:[
    provideTranslocoScope({
      scope: "",
      alias: "mf",
    }),
  ]
})
export class ManageStatisticComponent {
  translocoPath="statistic.manage-statistic"
}
