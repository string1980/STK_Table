import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { StkTableSpfxWebPartComponent } from './stk-table-spfx-web-part/stk-table-spfx-web-part.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    StkTableSpfxWebPartComponent,
    TableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [StkTableSpfxWebPartComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(StkTableSpfxWebPartComponent, { injector: this.injector });
    customElements.define('app-stk-table-spfx-web-part', el);
  }
}
