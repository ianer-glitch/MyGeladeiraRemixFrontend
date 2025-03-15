import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GetStatisticByUserService } from '../../getStatisticByUser/get-statistic-by-user.service';
import { Chart, plugins, registerables } from 'chart.js';
import { PageSubtitleComponent } from "../../../../shared/components/organisms/page-subtitle/page-subtitle.component";
import { SkeletonComponent } from "../../../../shared/components/atoms/skeleton/skeleton.component";
import { CommonModule } from '@angular/common';
import { provideTranslocoScope, TranslocoDirective, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'sustentability-graph',
  imports: [CommonModule, PageSubtitleComponent, SkeletonComponent,TranslocoDirective],
  templateUrl: './sustentability-graph.component.html',
  styleUrl: './sustentability-graph.component.css',
  providers:[
    provideTranslocoScope({
      scope: "",
      alias: "mf",
    }),
  ]
})
export class SustentabilityGraphComponent implements OnInit {


  constructor(
    private getStatisticByUserService : GetStatisticByUserService,
    private translocoService:TranslocoService
  ) {
    
  }
  ngOnInit(): void {
    Chart.register(...registerables);
    this.getStatisticByUser()
  }
  
  translocoPath="statistic.manage-statistic.sustentability-graph"

  getGraphLabels() : string[]{
    let brazil= ""
    this.translocoService.selectTranslate(this.translocoPath+'.brazil').subscribe((res)=>brazil = res)
      
    let you= ""
    this.translocoService.selectTranslate(this.translocoPath+'.you').subscribe((res)=>you = res)
    return [
      brazil,
      you
    ]
  }
  
  @ViewChild('graph') graph!: ElementRef;
  
  createChart(nationalFdi:number,userFdi:number){
    
    const ctx = this.graph.nativeElement
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.getGraphLabels(),
        datasets: [{
          label: '% Food Waste Index',
          data: [nationalFdi, userFdi],
          borderWidth: 1,
          backgroundColor:['#D9D9D9','#EDCD80']
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max:100,
            grid:{
              display:false
            },
            ticks:{
              font:{
                size:16
              }
            }
            
          },
          x:{
            grid:{
              display:false
            },
            ticks:{
              font:{
                size:16
              }
            }
          },
        },
        plugins:{
          legend:{
            display:false
          }  
        }
        
      }
    });
   
  }
  isLoading:boolean = false

  getStatisticByUser(){
    this.isLoading=true
    this.getStatisticByUserService.getStatisticByUser()
          .subscribe((res)=>{
            this.createChart(res.nationalFoodWasteIndex,res.userFoodWasteIndex)
            this.isLoading=false
          })
  }
}
