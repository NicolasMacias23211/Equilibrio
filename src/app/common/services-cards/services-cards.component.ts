import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-cards',
  templateUrl: './services-cards.component.html',
  styleUrls: ['./services-cards.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule
  ],
  animations:[
    trigger('Entrada',[
      state('void',style({
        transform: 'translateX(-100%)',
        opacity:0
      })),
      transition(':enter',[
        animate(700,style({
          transform:'translateX(0)',
          opacity:1
        }))
      ])
    ])
  ]
})
export class ServicesCardsComponent {
  hovered: boolean = false
}
