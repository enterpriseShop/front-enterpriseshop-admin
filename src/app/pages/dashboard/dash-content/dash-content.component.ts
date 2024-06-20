import { Component } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-dash-content',
  standalone: true,
  imports: [CardModule, ButtonModule, DividerModule, NgStyle],
  templateUrl: './dash-content.component.html',
  styleUrl: './dash-content.component.scss'
})
export class DashContentComponent {

  dashOrders: any[] = [
    {
      title: "Simple Card 1",
      info: "Lorem ipsum dolor sit amet 1111..."
    },
    {
      title: "Simple Card 2",
      info: "Lorem ipsum dolor sit amet 2222..."
    },
    {
      title: "Simple Card 3",
      info: "Lorem ipsum dolor sit amet 3333..."
    }
  ]

}
