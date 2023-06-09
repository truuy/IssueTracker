import { Component, OnInit } from '@angular/core';
import { TicketsService } from './service/tickets.service';
import { Ticket } from './model/tickets.model';

@Component({
  selector: 'tickets',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'IssueTrackingUI';
  tickets: Ticket[] = [];
  newTicket: Ticket = {
    id:'',
    title: '',
    description: '',
    author: '',
    priority: '',
    type: '',
    created: '',
    completed: ''
  }

  constructor(
    private ticketService: TicketsService
  ){}


  ngOnInit(): void {
    this.getAllTickets();
    
  }

  getAllTickets()
  {
    this.ticketService.getAllTickets().subscribe(response =>{
      this.tickets = response;
      console.log(response);
    });
    
  }


  onSubmit()
  {
    console.log(this.newTicket);
  }


}
