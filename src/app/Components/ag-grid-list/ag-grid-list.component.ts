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
  housingLocationsData: any[] = [];
  holidaysData: any[] = [];
    rowData: any[] = [];

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [];

  defaultColDef: ColDef = {
    flex: 1,
  };
 constructor(private getDataService: GetDataService) {}

  ngOnInit() {
    this.getDataFromService();
    this.getHolidaysData();
  }

  getDataFromService() {
    this.housingLocationsData = this.getDataService.getAllHousingLocations();
  }

  getHolidaysData() {
    this.getDataService.getHolidayData$().subscribe((data) => {
      this.holidaysData = data;
      console.log('Holidays Data:', this.holidaysData);
    });
  }
  onChangeData(type: string) {
    if (type == 'HL') {
      this.rowData = this.housingLocationsData;
      this.colDefs = [
        { field: 'name' },
        {
          field: 'city',
        },
        { field: 'state' },
        { field: 'state' },
        { field: 'availableUnits' },
        { field: 'wifi' },
        { field: 'laundry' },
      ];
    } else {
      this.rowData = this.holidaysData;
      this.colDefs = [
        { field: 'date' },
        {
          field: 'localName',
        },
        { field: 'name' },
        { field: 'countryCode' },
        { field: 'fixed' },
        { field: 'global' },
        { field: 'counties' },
        { field: 'launchYear' },
        { field: 'Public' },
      ];
    }
  }
}
