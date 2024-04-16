import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiEmpComponent } from './api-emp.component';

describe('ApiEmpComponent', () => {
  let component: ApiEmpComponent;
  let fixture: ComponentFixture<ApiEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiEmpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
