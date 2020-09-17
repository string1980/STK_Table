import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Injector} from '@angular/core';
import {createCustomElement} from '@angular/elements';

import {StkTableSpfxWebPartComponent} from './stk-table-spfx-web-part/stk-table-spfx-web-part.component';
import {TableComponent} from './components/table/table.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import {CdkTableModule} from '@angular/cdk/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {HttpClientModule} from '@angular/common/http';
import {YesNoComponent} from './dialogs/yes-no/yes-no.component';

@NgModule({
  declarations: [
    StkTableSpfxWebPartComponent,
    TableComponent,
    YesNoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ScrollingModule,
    FormsModule,
    MatCheckboxModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatInputModule,
    MatDialogModule,
    CdkTableModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    HttpClientModule,

  ],
  providers: [],
  entryComponents: [StkTableSpfxWebPartComponent, YesNoComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const el = createCustomElement(StkTableSpfxWebPartComponent, {injector: this.injector});
    customElements.define('app-stk-table-spfx-web-part', el);
  }
}
