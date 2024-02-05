import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotkComponent } from './notk.component';

describe('NotkComponent', () => {
  let component: NotkComponent;
  let fixture: ComponentFixture<NotkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotkComponent]
    });
    fixture = TestBed.createComponent(NotkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
