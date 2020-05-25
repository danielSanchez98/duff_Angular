import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosContentComponent } from './nosotros-content.component';

describe('NosotrosContentComponent', () => {
  let component: NosotrosContentComponent;
  let fixture: ComponentFixture<NosotrosContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosotrosContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotrosContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
