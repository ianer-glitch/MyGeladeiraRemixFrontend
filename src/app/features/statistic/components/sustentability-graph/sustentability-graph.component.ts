import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GetStatisticByUserService } from '../../getStatisticByUser/get-statistic-by-user.service';
import { Chart, plugins, registerables } from 'chart.js';
import { PageSubtitleComponent } from "../../../../shared/components/organisms/page-subtitle/page-subtitle.component";
import { SkeletonComponent } from "../../../../shared/components/atoms/skeleton/skeleton.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sustentability-graph',
  imports: [CommonModule, PageSubtitleComponent, SkeletonComponent],
  templateUrl: './sustentability-graph.component.html',
  styleUrl: './sustentability-graph.component.css'
})
export class SustentabilityGraphComponent implements AfterViewInit {

  constructor(private getStatisticByUserService : GetStatisticByUserService) {
    
  }
  
  ngAfterViewInit(): void {
    Chart.register(...registerables);
    this.getStatisticByUser()
    

  }
  @ViewChild('graph') graph!: ElementRef;
  
  createChart(nationalFdi:number,userFdi:number){
    
    const ctx = this.graph.nativeElement
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Brasil', 'Você'],
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
