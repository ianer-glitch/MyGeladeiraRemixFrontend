import { Component } from '@angular/core';
import { InputTextComponent } from "../../../../shared/components/organisms/input-text/input-text.component";
import { InputNumberComponent } from "../../../../shared/components/organisms/input-number/input-number.component";
import { InputNumberButtonsComponent } from "../../../../shared/components/templates/input-number-buttons/input-number-buttons.component";
import { ConfirmationButtonsComponent } from "../../../../shared/components/molecules/confirmation-buttons/confirmation-buttons.component";
import { ExpirationTimeSelectorComponent } from "../expiration-time-selector/expiration-time-selector.component";
import { ImgUploadItemComponent } from "../img-upload-item/img-upload-item.component";

@Component({
  selector: 'admin-create-edit-item-form',
  imports: [InputTextComponent, InputNumberComponent, InputNumberButtonsComponent, ConfirmationButtonsComponent, ExpirationTimeSelectorComponent, ImgUploadItemComponent],
  templateUrl: './admin-create-edit-item-form.component.html',
  styleUrl: './admin-create-edit-item-form.component.css'
})
export class AdminCreateEditItemFormComponent {

}
