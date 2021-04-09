import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpoExamesComponent } from './corpoExames.component';

describe('CorpoExamesComponent', () => {
  let component: CorpoExamesComponent;
  let fixture: ComponentFixture<CorpoExamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorpoExamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpoExamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
