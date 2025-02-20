import { Component } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'img-upload-item',
  imports: [],
  templateUrl: './img-upload-item.component.html',
  styleUrl: './img-upload-item.component.css'
})
export class ImgUploadItemComponent implements ControlValueAccessor{
  onChange : (param:any)=>void = ()=>{}
  onTouch : ()=>void = ()=>{}
  value:File = {} as File
  fileUrl = ""

  writeValue(obj: any): void {
    this.value = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    
  }
 
  
  handleImageUpload(){
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.style.display = 'none'; 

    document.body.appendChild(fileInput);

    fileInput.click();

    fileInput.addEventListener('change', (event : any) => {
      const input = event.target as HTMLInputElement;
      
      if (input && input.files) {
        this.value = input.files[0]; 
        this.onChange(input.files[0])
        this.fileUrl = this.convertFileToURL(input.files[0])
      }
    });

    fileInput.remove();
  }

  convertFileToURL(file: File): string {
    return URL.createObjectURL(file);
  }
}
