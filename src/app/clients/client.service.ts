import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl = 'https://localhost:7027/api/Clients'; // backend client endpoint

  constructor(private http: HttpClient) { }

  // Get clients with filters and pagination
  getClients(filters: any = {}, pageNumber: number = 1, pageSize: number = 10): Observable<any> {
    let params = new HttpParams()
      .set('pageNumber', pageNumber)
      .set('pageSize', pageSize);
      if (filters.name) params = params.set('name', filters.name);
      if (filters.gender) params = params.set('gender', filters.gender);
      if (filters.dob) params = params.set('dob', filters.dob);
      
      return this.http.get<any>(this.apiUrl, { params });
  }

  getClientById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addClient(client: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, client);
  }
}
