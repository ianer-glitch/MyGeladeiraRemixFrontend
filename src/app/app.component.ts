import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ToastComponent } from "./shared/components/atoms/toast/toast.component";
import { LangDefinition, TranslocoService } from "@jsverse/transloco";


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ButtonModule,
    ButtonModule,
    FormsModule,
    ToastComponent
],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.service.setDefaultLang('en')
  }
  visible=false
  title = 'MyGeladeiraRemixFrontend';
  value:number=0

  
  service = inject(TranslocoService);

  availableLangs = this.service.getAvailableLangs() as LangDefinition[];
  

}
