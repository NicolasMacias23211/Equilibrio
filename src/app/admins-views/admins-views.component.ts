import { Component } from '@angular/core';

@Component({
  selector: 'app-admins-views',
  templateUrl: './admins-views.component.html',
  styleUrls: ['./admins-views.component.css']
})
export class AdminsViewsComponent {

  selectedComponent: string = "citas";

  onToggleChange(value: string) {
    this.selectedComponent = value;
  }
}
