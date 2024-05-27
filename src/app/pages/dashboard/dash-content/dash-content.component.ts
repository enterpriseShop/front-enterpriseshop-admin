import { Component } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-dash-content',
  standalone: true,
  imports: [CardModule, ButtonModule, DividerModule],
  templateUrl: './dash-content.component.html',
  styleUrl: './dash-content.component.scss'
})
export class DashContentComponent {

}
