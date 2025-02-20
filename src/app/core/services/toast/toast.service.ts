import { Injectable } from '@angular/core';
import { MessageService, ToastMessageOptions } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService{

  constructor(private messageService : MessageService) {
    
  }

  defaultMessage:ToastMessageOptions = { 
    severity: 'info', 
    summary: 'Info', 
    detail: 'message', 
    life: 3000 
  }

  public showSucces(message:string,life?:number){
    this.defaultMessage.summary='Sucesso'
    this.defaultMessage.severity='success'
    this.defaultMessage.detail=message
    if(life)
      this.defaultMessage.life=life

    return  this.messageService.add(this.defaultMessage);
  }

  public showError(message:string,life?:number){
    this.defaultMessage.summary='Algo deu Errado'
    this.defaultMessage.severity='error'
    this.defaultMessage.detail=message
    if(life)
      this.defaultMessage.life=life

    return  this.messageService.add(this.defaultMessage);
  }

  public showWarn(message:string,life?:number){
    this.defaultMessage.summary='Atenção!'
    this.defaultMessage.severity='warn'
    this.defaultMessage.detail=message
    if(life)
      this.defaultMessage.life=life

    return  this.messageService.add(this.defaultMessage);
  }

  
}
