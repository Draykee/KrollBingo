import {Component, Input, OnInit} from '@angular/core';
import {Menu} from '@shared/models/menu.model';


@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.scss']
})
export class VerticalMenuComponent implements OnInit {

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
