import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Record } from '../_models/record';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/cdr/';

  constructor(private http: HttpClient) { }
  getChargeDataRecords() {
    return this.http.get<Record[]>(this.apiUrl);
  }

}
