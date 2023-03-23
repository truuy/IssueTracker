import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Ticket } from '../model/tickets.model';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
    baseUrl = 'https://localhost:7098/api/Issue'
  constructor(

    private http: HttpClient

  ) { }

  //Get all cards from the api
  getAllTickets(): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(this.baseUrl);
  }
}
