import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechLocationSearchComponent } from './tech-location-search.component';

describe('TechLocationSearchComponent', () => {
  let component: TechLocationSearchComponent;
  let fixture: ComponentFixture<TechLocationSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechLocationSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechLocationSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
