import {Component, Input, OnInit} from '@angular/core';
import {Menu} from '@shared/models/menu.model';


@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.scss'],
})
export class HorizontalMenuComponent implements OnInit {

  @Input()
  public menuItems: Array<Menu> = [
    new Menu('Home', '/'),
    new Menu('About', '/about')
  ];

  constructor() {
  }

  ngOnInit() {

  }

}
