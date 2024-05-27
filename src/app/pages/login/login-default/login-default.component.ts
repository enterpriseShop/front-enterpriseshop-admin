import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RouterOutlet } from '@angular/router';

const primeImports = [
  CardModule,
  ButtonModule
]

@Component({
  selector: 'app-login-default',
  standalone: true,
  imports: [primeImports, RouterOutlet],
  templateUrl: './login-default.component.html',
  styleUrl: './login-default.component.scss'
})
export class LoginDefaultComponent {

}
