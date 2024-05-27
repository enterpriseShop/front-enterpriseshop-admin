import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-default',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './product-default.component.html',
  styleUrl: './product-default.component.scss'
})
export class ProductDefaultComponent {

}
