import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeDeniedComponent } from './age-denied.component';

describe('AgeDeniedComponent', () => {
  let component: AgeDeniedComponent;
  let fixture: ComponentFixture<AgeDeniedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgeDeniedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeDeniedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
