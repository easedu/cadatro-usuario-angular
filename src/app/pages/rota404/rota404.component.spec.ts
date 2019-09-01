import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rota404Component } from './rota404.component';

describe('Rota404Component', () => {
  let component: Rota404Component;
  let fixture: ComponentFixture<Rota404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rota404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rota404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
