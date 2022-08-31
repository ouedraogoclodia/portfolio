import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwirlCursorComponent } from './swirl-cursor.component';

describe('SwirlCursorComponent', () => {
  let component: SwirlCursorComponent;
  let fixture: ComponentFixture<SwirlCursorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwirlCursorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwirlCursorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
