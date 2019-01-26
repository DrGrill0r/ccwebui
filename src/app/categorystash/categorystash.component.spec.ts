import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorystashComponent } from './categorystash.component';

describe('CategorystashComponent', () => {
  let component: CategorystashComponent;
  let fixture: ComponentFixture<CategorystashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorystashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorystashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
