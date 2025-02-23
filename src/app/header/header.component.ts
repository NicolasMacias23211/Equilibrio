import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
constructor(public router: Router) { }

}

