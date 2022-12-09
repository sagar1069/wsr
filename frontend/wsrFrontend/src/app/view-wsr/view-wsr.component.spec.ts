import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWsrComponent } from './view-wsr.component';

describe('ViewWsrComponent', () => {
  let component: ViewWsrComponent;
  let fixture: ComponentFixture<ViewWsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWsrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewWsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
