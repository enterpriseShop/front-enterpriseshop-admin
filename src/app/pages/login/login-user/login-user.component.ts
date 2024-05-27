import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login-user',
  standalone: true,
  imports: [InputTextModule, RouterLink, ButtonModule],
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.scss'
})
export class LoginUserComponent {

}
