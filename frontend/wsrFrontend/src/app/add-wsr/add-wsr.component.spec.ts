import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWsrComponent } from './add-wsr.component';

describe('AddWsrComponent', () => {
  let component: AddWsrComponent;
  let fixture: ComponentFixture<AddWsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWsrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
