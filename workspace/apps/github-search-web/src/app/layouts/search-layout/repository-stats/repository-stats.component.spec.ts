import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryStatsComponent } from './repository-stats.component';

describe('RepositoryStatsComponent', () => {
  let component: RepositoryStatsComponent;
  let fixture: ComponentFixture<RepositoryStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoryStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
