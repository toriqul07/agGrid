import { Component } from '@angular/core';

import { AgGridAngular } from "ag-grid-angular";
import type { ColDef } from "ag-grid-community";
import { GetDataService } from '../../core/services/get-data.service';

interface IRow {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}
@Component({
  selector: 'app-ag-grid-list',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './ag-grid-list.component.html',
  styleUrl: './ag-grid-list.component.css'
})
export class AgGridListComponent {
  // rowData = [
  //   // { item: 'Tesla', price: 64950, priority: true },
  //   // { item: 'Ford', price: 33850, priority: false },
  //   // { item: 'Toyota', price: 29600, priority: false },
  // ];
  rowData:any = [];

  // Column Definitions: Defines & controls grid columns.
   colDefs: ColDef[] = [
    { field: 'name' },
    {
      field: 'city',
    },
    { field: 'photo' },
    { field: 'availableUnits' },
    { field: 'wifi'},
    { field: 'laundry' },
  ];

  defaultColDef: ColDef = {
    flex: 1,
  };
  constructor(private getDataService: GetDataService) {
    // console.log(this.getDataService.getAllHousingLocations());
    this.getDataFromService();
  }
  getDataFromService() {    
    
    this.rowData = this.getDataService.getAllHousingLocations();
    console.log(this.rowData);
  }
}
