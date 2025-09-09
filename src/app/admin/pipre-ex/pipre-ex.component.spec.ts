import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipreExComponent } from './pipre-ex.component';

describe('PipreExComponent', () => {
  let component: PipreExComponent;
  let fixture: ComponentFixture<PipreExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipreExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipreExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
