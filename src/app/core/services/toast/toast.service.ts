import { Injectable } from '@angular/core';
import { MessageService, ToastMessageOptions } from 'primeng/api';
import {TranslocoService } from '@jsverse/transloco';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService{

  constructor(
    private messageService : MessageService,
    private translocoService : TranslocoService
  ) {
    
  }

  translocoPath="toast-service."

  private defaultMessage:ToastMessageOptions = { 
    severity: 'info', 
    summary: 'Info', 
    detail: 'message', 
    life: 3000 
  }

  public showSucces(message:string,life?:number){
    
    this.translocoService.selectTranslate(this.translocoPath+'success').subscribe((res)=>this.defaultMessage.summary=res)
    this.defaultMessage.severity='success'
    this.defaultMessage.detail=message
    if(life)
      this.defaultMessage.life=life

    return  this.messageService.add(this.defaultMessage);
  }

  public showError(message:string,life?:number){
    this.translocoService.selectTranslate(this.translocoPath+'error').subscribe((res)=>this.defaultMessage.summary=res)
    this.defaultMessage.severity='error'
    this.defaultMessage.detail=message
    if(life)
      this.defaultMessage.life=life

    return  this.messageService.add(this.defaultMessage);
  }

  public showWarn(message:string,life?:number){
    this.translocoService.selectTranslate(this.translocoPath+'warn').subscribe((res)=>this.defaultMessage.summary=res)
    this.defaultMessage.severity='warn'
    this.defaultMessage.detail=message
    if(life)
      this.defaultMessage.life=life

    return  this.messageService.add(this.defaultMessage);
  }

  public clear(key? : string) : void{
    this.messageService.clear(key)
  }
  
  private removeAllSubscription :Subscription = {} as Subscription
  
  public subscribeToClearAllMessages(){
    this.removeAllSubscription = this.messageService.messageObserver.subscribe(f =>{
      this.messageService.clear()
    })
  }

  public unsubscribeClearAllMessages(){
    this.removeAllSubscription.unsubscribe()
  }
  
}
