import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AvailableLangs, provideTranslocoScope, TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { PrimeIconComponent } from "../../../../../shared/components/atoms/prime-icon/prime-icon.component";
import { ToastService } from '../../../../../core/services/toast/toast.service';

@Component({
  selector: 'language-switch',
  imports: [TranslocoDirective, CommonModule, PrimeIconComponent],
  templateUrl: './language-switch.component.html',
  styleUrl: './language-switch.component.css'
})
export class LanguageSwitchComponent implements OnInit,OnDestroy {

  
  constructor(private translocoService : TranslocoService,
    private toastService : ToastService

  ) {
    
  }
  ngOnDestroy(): void {
    this.toastService.unsubscribeClearAllMessages()
  }
  translocoPath="identity.user.settings.language-switch"
  avaliableLanguages:string[] = []
  ngOnInit(): void {
    this.avaliableLanguages = this.translocoService.getAvailableLangs() as string[]
    this.toastService.subscribeToClearAllMessages()
  }

  handleLanguageItemClick(language:string){
    this.translocoService.setActiveLang(language)
    
  }

  isActive(language : string){
    return this.translocoService.getActiveLang() == language
  }
}
