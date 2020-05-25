import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CervezasContentComponent } from './cervezas-content.component';

describe('CervezasContentComponent', () => {
  let component: CervezasContentComponent;
  let fixture: ComponentFixture<CervezasContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CervezasContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CervezasContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
