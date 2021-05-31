import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartakerFormComponent } from './partaker-form.component';

describe('PartakerFormComponent', () => {
  let component: PartakerFormComponent;
  let fixture: ComponentFixture<PartakerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartakerFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartakerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
