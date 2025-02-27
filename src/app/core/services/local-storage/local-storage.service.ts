import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }


  public setItem<T>(key:string , object : T){
    const stringObj = JSON.stringify(object)
    localStorage.setItem(key,btoa(stringObj))
  }

  public getItem<T>(key : string) : T {
    const stringItem = localStorage.getItem(key)
    if(stringItem){
      return JSON.parse(atob(stringItem ?? "" ))
    }
    return {} as T
  }

  public removeItem(key:string){
    localStorage.removeItem(key)
  }

  public clear(){
    localStorage.clear()
  }
}
