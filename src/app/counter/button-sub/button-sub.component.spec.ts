import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSubComponent } from './button-sub.component';

describe('ButtonSubComponent', () => {
  let component: ButtonSubComponent;
  let fixture: ComponentFixture<ButtonSubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonSubComponent]
    });
    fixture = TestBed.createComponent(ButtonSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
