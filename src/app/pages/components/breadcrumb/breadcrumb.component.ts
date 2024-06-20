import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { log } from 'console';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BreadcrumbItems } from '../../../models/Generics.model';

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
export class BreadcrumbComponent implements OnChanges {

  @Input() items: BreadcrumbItems[] = [];

  home: Home = { icon: 'pi pi-home', routerLink: '/dashboard' };
  // items: BreadcrumbItems[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['breadcrumb']) {
      this.items = changes['breadcrumb'].currentValue;
    }
  }

}
