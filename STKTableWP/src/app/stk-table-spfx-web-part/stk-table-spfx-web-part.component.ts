import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-stk-table-spfx-web-part',
  templateUrl: './stk-table-spfx-web-part.component.html',
  styleUrls: ['./stk-table-spfx-web-part.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class StkTableSpfxWebPartComponent implements OnInit {
  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
