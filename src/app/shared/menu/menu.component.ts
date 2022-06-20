import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    .logo {
      width: 30px;
      margin-right: 20px;
    }
  `],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'Home'
      },
      {
        label: 'Projects'
      },
      {
        label: 'About me'
      },
    ];
  }
}
