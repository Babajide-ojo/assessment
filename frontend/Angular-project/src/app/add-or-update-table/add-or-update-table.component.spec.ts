import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateTableComponent } from './add-or-update-table.component';

describe('AddOrUpdateTableComponent', () => {
  let component: AddOrUpdateTableComponent;
  let fixture: ComponentFixture<AddOrUpdateTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrUpdateTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrUpdateTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
