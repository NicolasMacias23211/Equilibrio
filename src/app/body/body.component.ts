import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list'; 
import { gsap } from 'gsap';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  standalone: true,
  imports: [MatExpansionModule,MatCardModule,MatGridListModule],
})
export class BodyComponent {
  panelOpenState = false;

  ngOnInit(): void {
    gsap.to("#square", {
      duration: 4,
      ease: "none",
      repeat: -1,
      rotation: 360,
    });
  }
}
