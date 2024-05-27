import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login-forgot',
  standalone: true,
  imports: [RouterLink, InputTextModule, ButtonModule],
  templateUrl: './login-forgot.component.html',
  styleUrl: './login-forgot.component.scss'
})
export class LoginForgotComponent {

}
