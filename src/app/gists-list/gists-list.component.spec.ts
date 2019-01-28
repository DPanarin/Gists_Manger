import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GistsListComponent } from './gists-list.component';

describe('GistsListComponent', () => {
  let component: GistsListComponent;
  let fixture: ComponentFixture<GistsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GistsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GistsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
