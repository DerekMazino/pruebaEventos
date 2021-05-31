import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartakerListComponent } from './partaker-list.component';

describe('PartakerListComponent', () => {
  let component: PartakerListComponent;
  let fixture: ComponentFixture<PartakerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartakerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartakerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
