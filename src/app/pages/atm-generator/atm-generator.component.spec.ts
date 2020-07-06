import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmGeneratorComponent } from './atm-generator.component';

describe('AtmGeneratorComponent', () => {
  let component: AtmGeneratorComponent;
  let fixture: ComponentFixture<AtmGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
