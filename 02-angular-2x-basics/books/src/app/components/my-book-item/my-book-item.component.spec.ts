import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBookItemComponent } from './my-book-item.component';

describe('MyBookItemComponent', () => {
  let component: MyBookItemComponent;
  let fixture: ComponentFixture<MyBookItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBookItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBookItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
