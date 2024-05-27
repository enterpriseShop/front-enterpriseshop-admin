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


@Component({
  selector: 'app-dash-default',
  standalone: true,
  imports: [RouterLink, RouterOutlet, HeaderComponent, SidebarModule, ButtonModule, AvatarModule, RippleModule, StyleClassModule, NgClass, ToolbarModule],
  templateUrl: './dash-default.component.html',
  styleUrl: './dash-default.component.scss'
})
export class DashDefaultComponent {

  isSidebarOpen: boolean = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.menuBtnChange();
    const sidebarMenu = document.querySelector(".sidebar_menu");
    if (sidebarMenu) {
      sidebarMenu.classList.toggle("open", this.isSidebarOpen);
    }
  }

  menuBtnChange() {
    const closeBtn = document.querySelector("#button");
    if (closeBtn) {
      if (this.isSidebarOpen) {
        closeBtn.classList.replace("pi-arrow-circle-left", "pi-arrow-circle-right");
      } else {
        closeBtn.classList.replace("pi-arrow-circle-right", "pi-arrow-circle-left");
      }
    }
  }

  crtlMenu(evt: any) {
    this.toggleSidebar();
  }

}
