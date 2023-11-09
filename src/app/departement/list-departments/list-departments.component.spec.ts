import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDepartmentsComponent } from './list-departments.component';
import { HttpClientModule } from '@angular/common/http';



beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [HttpClientModule], // Include HttpClientModule here
    declarations: [ListDepartmentsComponent],
  }).compileComponents();
});

describe('ListDepartmentsComponent', () => {
  let component: ListDepartmentsComponent;
  let fixture: ComponentFixture<ListDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDepartmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
