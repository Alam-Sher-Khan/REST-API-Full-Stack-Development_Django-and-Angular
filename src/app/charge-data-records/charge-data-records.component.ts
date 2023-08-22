import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { Record } from '../_models/record';

@Component({
  selector: 'app-charge-data-records',
  templateUrl: './charge-data-records.component.html',
  styleUrls: ['./charge-data-records.component.css']
})
export class ChargeDataRecordsComponent implements OnInit {
  
  chargeDataRecords: Record[] = [];
  searchText: any; // Initialize search text
  p: number;

  sortColumn: string = 'id'; // Default sort column
  sortOrder: string = 'asc'; // Default sort order

  constructor(private apiService: ApiService) { }
  
  ngOnInit(): void {
    this.getChargeDataRecords();
  }

  getChargeDataRecords() {
    this.apiService.getChargeDataRecords().subscribe((data) => {
      this.chargeDataRecords = data;
      this.sortRecords(); // Sort records after data is fetched
    });
  }

  // Filter function based on session identification
  filterRecords() {
    const searchInteger = parseInt(this.searchText, 10);
    if (!isNaN(searchInteger)) {
      this.chargeDataRecords = this.chargeDataRecords.filter(
        (record: any) => record.id === searchInteger
      );
    } else {
      this.ngOnInit();
    }
  }

  // Sort records based on sortColumn and sortOrder
  sortRecords() {
    this.chargeDataRecords = this.chargeDataRecords.slice().sort((a, b) => {
      const valA = a[this.sortColumn];
      const valB = b[this.sortColumn];
  
      if (this.sortColumn === 'start_time' || this.sortColumn === 'end_time') {
        return this.sortOrder === 'asc' ? new Date(valA).getTime() - new Date(valB).getTime() : new Date(valB).getTime() - new Date(valA).getTime();
      } else if (this.sortColumn === 'total_cost') {
        return this.sortOrder === 'asc' ? valA - valB : valB - valA;
      } else {
        return 0; // No sorting for other columns
      }
    });
  }

  // Toggle sorting order
  toggleSortOrder() {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.sortRecords();
  }

  // Update sortColumn and sort records
  changeSortColumn(column: string) {
    if (this.sortColumn === column) {
      this.toggleSortOrder();
    } else {
      this.sortColumn = column;
      this.sortRecords();
      this.sortOrder = 'asc'; // Reset to default ascending order
    }
  }
}
