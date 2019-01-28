import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditGistComponent } from './create-edit-gist.component';

describe('CreateEditGistComponent', () => {
  let component: CreateEditGistComponent;
  let fixture: ComponentFixture<CreateEditGistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEditGistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditGistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
