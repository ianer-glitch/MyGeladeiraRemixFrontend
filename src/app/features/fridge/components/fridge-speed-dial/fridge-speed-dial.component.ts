import { Component, output } from '@angular/core';
import { SpeedDialComponent } from "../../../../shared/components/atoms/speed-dial/speed-dial.component";
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'fridge-speed-dial',
  imports: [SpeedDialComponent],
  templateUrl: './fridge-speed-dial.component.html',
  styleUrl: './fridge-speed-dial.component.css'
})
export class FridgeSpeedDialComponent {
 addClick = output()
 removeClick = output()
 onShow = output()
 onHide = output()
 
  items:MenuItem[] = [
    {
      icon: 'pi pi-plus-circle',
      command: () => {
        this.addClick.emit()
      }
    },{
      icon: 'pi pi-minus-circle',
      command: () => {
        this.removeClick.emit()
      }
    }

]
}
