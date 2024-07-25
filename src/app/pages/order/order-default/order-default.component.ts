import { CommonModule, NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { Table, TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { FormsModule, NgModel } from '@angular/forms';
import { BreadcrumbItems } from '../../../models/Generics.model';
import { Status } from '../../../models/Status.model';
import { RouterLink } from '@angular/router';
import { Order } from '../../../models/Orders.model';
import { OrdersService } from '../../../services/orders/orders.service';

interface Menu {
  value: number;
  title: string;
  icon: string;
}

@Component({
  selector: 'app-order-default',
  standalone: true,
  imports: [
    CommonModule,
    NgClass,
    FormsModule,
    RouterLink,
    ButtonModule,
    TableModule,
    InputTextModule,
    DropdownModule,
    AvatarModule,
    AvatarGroupModule,
    BreadcrumbComponent,
  ],
  templateUrl: './order-default.component.html',
  styleUrl: './order-default.component.scss',
})
export class OrderDefaultComponent implements OnInit {
  private orderService = inject(OrdersService);

  selectedStatus: Status | undefined;

  status: Status[] = [];
  orders: Order[] = [];
  breadcrumb: BreadcrumbItems[] = [];
  order_menu: Menu[] = [
    {
      value: 56,
      title: 'Pagamentos pendentes',
      icon: 'ri-calendar-2-line ri-2x',
    },
    {
      value: 12.689,
      title: 'Pedidos completos',
      icon: 'ri-check-double-line ri-2x',
    },
    {
      value: 124,
      title: 'Reembolsos',
      icon: 'ri-refund-2-line ri-2x',
    },
    {
      value: 6,
      title: 'Cancelados',
      icon: 'ri-error-warning-line ri-2x',
    },
  ];
  ngOnInit(): void {
    this.getAllOrders();
  }

  // checkUrl() {
  //   const route_url = this.router.url;
  //   const urlParts = route_url.split('/');
  //   let parts: any[] = [];
  //   urlParts.shift();

  //   urlParts.forEach((item: string) => {
  //     parts.push({ label: item });
  //   });
  //   this.breadcrumb = parts;
  // }

  getAllOrders() {
    this.orderService.getAllOrders().subscribe({
      next: (data) => {
        this.orders = data;
        console.log('GET ALL ORDERS DATA:', data);
      },
      error: (err) => {
        console.log('GET ALL ORDERS ERR:', err);
      },
    });
  }
}
