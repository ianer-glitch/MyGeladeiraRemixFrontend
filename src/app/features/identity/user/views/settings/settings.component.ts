import { Component } from '@angular/core';
import { PageTitleComponent } from "../../../../../shared/components/atoms/page-title/page-title.component";
import { provideTranslocoScope, TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { LanguageSwitchComponent } from "../../components/language-switch/language-switch.component";
@Component({
  selector: 'settings',
  imports: [PageTitleComponent, TranslocoDirective, LanguageSwitchComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css',
  providers:[
    provideTranslocoScope({
      scope: "",
      alias: "mf",
    }),
  ]
})
export class SettingsComponent {
 translocoPath="identity.user.settings"
}
