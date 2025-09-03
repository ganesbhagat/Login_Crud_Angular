import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { ClientService } from '../client.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-client-grid',
  templateUrl: './client-grid.component.html',
  styleUrls: ['./client-grid.component.css']
})
export class ClientGridComponent implements OnChanges {

  @Input() filters: any = {};
  @Input() pageNumber = 1;
  @Input() pageSize = 10;
  @Output() pageChange = new EventEmitter<PageEvent>();

  clients: any[] = [];
  totalCount = 0;

  constructor(private clientService: ClientService) {}

  ngOnChanges(changes: SimpleChanges) {
    this.loadClients(); // Reload data whenever filters/page change
  }

  loadClients() {
    this.clientService.getClients(this.filters, this.pageNumber, this.pageSize)
      .subscribe((res: any) => {
        this.clients = res.clients || res;        // Handle response shape
        this.totalCount = res.totalCount || res.length;
      });
  }

  onPageChange(event: PageEvent) {
    this.pageChange.emit(event); // Send event to parent
  }
}
