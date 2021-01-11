import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVoitureComponent } from './addVoiture.component';

describe('AddVoitureComponent', () => {
  let component: AddVoitureComponent;
  let fixture: ComponentFixture<AddVoitureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVoitureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVoitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});