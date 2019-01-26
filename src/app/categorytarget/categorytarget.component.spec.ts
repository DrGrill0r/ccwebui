import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorytargetComponent } from './categorytarget.component';

describe('CategorytargetComponent', () => {
  let component: CategorytargetComponent;
  let fixture: ComponentFixture<CategorytargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorytargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorytargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
