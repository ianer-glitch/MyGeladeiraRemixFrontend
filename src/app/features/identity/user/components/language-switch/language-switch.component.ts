import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AvailableLangs, provideTranslocoScope, TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { PrimeIconComponent } from "../../../../../shared/components/atoms/prime-icon/prime-icon.component";

@Component({
  selector: 'language-switch',
  imports: [TranslocoDirective, CommonModule, PrimeIconComponent],
  templateUrl: './language-switch.component.html',
  styleUrl: './language-switch.component.css'
})
export class LanguageSwitchComponent implements OnInit {

  
  constructor(private translocoService : TranslocoService) {
    
  }
  avaliableLanguages:string[] = []
  ngOnInit(): void {
    this.avaliableLanguages = this.translocoService.getAvailableLangs() as string[]
    
  }
}
