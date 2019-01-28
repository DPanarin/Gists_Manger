import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GistFilesComponent } from './gist-files.component';

describe('GistFilesComponent', () => {
  let component: GistFilesComponent;
  let fixture: ComponentFixture<GistFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GistFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GistFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
