import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotlistComponent } from './notlist.component';

describe('NotlistComponent', () => {
  let component: NotlistComponent;
  let fixture: ComponentFixture<NotlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotlistComponent]
    });
    fixture = TestBed.createComponent(NotlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
