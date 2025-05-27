import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsExampleComponent } from './reactive-forms-example.component';

describe('ReactiveFormsExampleComponent', () => {
  let component: ReactiveFormsExampleComponent;
  let fixture: ComponentFixture<ReactiveFormsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
