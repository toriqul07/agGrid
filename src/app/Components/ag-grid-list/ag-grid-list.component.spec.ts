import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridListComponent } from './ag-grid-list.component';

describe('AgGridListComponent', () => {
  let component: AgGridListComponent;
  let fixture: ComponentFixture<AgGridListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgGridListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
