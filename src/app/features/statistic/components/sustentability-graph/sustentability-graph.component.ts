import { Component, OnInit } from '@angular/core';
import { IconInfoComponent } from "../../../../shared/components/molecules/icon-info/icon-info.component";
import { GetStatisticByUserService } from '../../getStatisticByUser/get-statistic-by-user.service';

@Component({
  selector: 'sustentability-graph',
  imports: [IconInfoComponent],
  templateUrl: './sustentability-graph.component.html',
  styleUrl: './sustentability-graph.component.css'
})
export class SustentabilityGraphComponent implements OnInit {

  constructor(private getStatisticByUserService : GetStatisticByUserService) {
    
  }
  
  ngOnInit(): void {
    this.getStatisticByUser()
  }

  getStatisticByUser(){
    
    this.getStatisticByUserService.getStatisticByUser().subscribe((res)=>console.info(res))
  }
}
