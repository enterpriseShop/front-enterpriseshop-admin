import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginForgotComponent } from './login-forgot.component';

describe('LoginForgotComponent', () => {
  let component: LoginForgotComponent;
  let fixture: ComponentFixture<LoginForgotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginForgotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
