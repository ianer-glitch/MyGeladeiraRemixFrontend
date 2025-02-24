import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StaticImageComponent } from "../../../../../shared/components/atoms/static-image/static-image.component";

@Component({
  selector: 'step-bar-login',
  imports: [CommonModule, StaticImageComponent],
  templateUrl: './step-bar-login.component.html',
  styleUrl: './step-bar-login.component.css'
})
export class StepBarLoginComponent {
  @Input() stepActive:number = 0

  hideHr(currenctStep:number,maxStep : number){
    return currenctStep >=maxStep
  }
}
