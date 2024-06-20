import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { ToolbarModule } from 'primeng/toolbar';
import { StyleClassModule } from 'primeng/styleclass';
import { HeaderComponent } from '../../components/header/header.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenuList } from '../../../models/Generics.model';


@Component({
  selector: 'app-dash-default',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    HeaderComponent,
    SidebarModule,
    ButtonModule,
    AvatarModule,
    RippleModule,
    StyleClassModule,
    NgClass,
    ToolbarModule
  ],
  templateUrl: './dash-default.component.html',
  styleUrl: './dash-default.component.scss'
})
export class DashDefaultComponent {

  isSidebarOpen: boolean = false;
  sidebarVisible: boolean = false;

  menu: MenuList[] = [
    {
      label: "Dashboard",
      router: "/dashboard",
      icon: "ri-dashboard-line mr-2"
    },
    {
      label: "Produtos",
      router: "products",
      icon: "ri-box-3-line mr-2"
    },
    {
      label: "Categorias",
      router: "categories",
      icon: "ri-list-unordered mr-2"
    }
  ];

  crtlMenu(evt: any) {
    // this.toggleSidebar();
    this.sidebarVisible = evt;
  }

}
