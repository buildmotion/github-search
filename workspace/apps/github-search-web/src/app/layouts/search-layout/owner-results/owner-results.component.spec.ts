import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerResultsComponent } from './owner-results.component';

describe('OwnerResultsComponent', () => {
  let component: OwnerResultsComponent;
  let fixture: ComponentFixture<OwnerResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
