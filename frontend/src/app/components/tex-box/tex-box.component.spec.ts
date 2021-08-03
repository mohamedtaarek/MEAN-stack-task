import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexBoxComponent } from './tex-box.component';

describe('TexBoxComponent', () => {
  let component: TexBoxComponent;
  let fixture: ComponentFixture<TexBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TexBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TexBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
