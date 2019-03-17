import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLocationResultsComponent } from './tech-location-results.component';

describe('TechLocationResultsComponent', () => {
  let component: TechLocationResultsComponent;
  let fixture: ComponentFixture<TechLocationResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechLocationResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechLocationResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
