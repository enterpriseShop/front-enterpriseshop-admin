import { Component } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';

interface MenuItem {
  icon?: string;
  route?: string;
  label?: string;
};

interface Home {
  icon: string;
  routerLink: string;
};

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [BreadcrumbModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {

  home: Home = { icon: 'pi pi-home', routerLink: '/' };
  items: MenuItem[] = [
    { label: 'Electronics' },
    { label: 'Computer' },
    { label: 'Accessories' },
    { label: 'Keyboard' },
    { label: 'Wireless' }
  ];

}
