import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RchartComponent } from './rchart.component';

describe('RchartComponent', () => {
  let component: RchartComponent;
  let fixture: ComponentFixture<RchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
