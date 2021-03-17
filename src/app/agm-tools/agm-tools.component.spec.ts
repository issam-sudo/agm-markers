import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgmToolsComponent } from './agm-tools.component';

describe('AgmToolsComponent', () => {
  let component: AgmToolsComponent;
  let fixture: ComponentFixture<AgmToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgmToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgmToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
