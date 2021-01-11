import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsComponent } from './voiture.component';

describe('VoituresComponent', () => {
  let component: VoituresComponent;
  let fixture: ComponentFixture<VoituresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoituresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoituresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});