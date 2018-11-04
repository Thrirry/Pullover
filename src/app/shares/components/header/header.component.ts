import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ROUTES } from './asset'
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  cate: any[] = ROUTES;
  constructor() { }

  ngOnInit() {
      this.cate = ROUTES.filter(cate => cate);
      $.getScript('../../../assets/js/function-main.min.js');
  }

}
