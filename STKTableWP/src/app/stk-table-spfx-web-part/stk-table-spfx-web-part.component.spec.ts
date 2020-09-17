import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StkTableSpfxWebPartComponent } from './stk-table-spfx-web-part.component';

describe('StkTableSpfxWebPartComponent', () => {
  let component: StkTableSpfxWebPartComponent;
  let fixture: ComponentFixture<StkTableSpfxWebPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StkTableSpfxWebPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StkTableSpfxWebPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
