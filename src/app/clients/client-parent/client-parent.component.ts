import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-client-parent',
  templateUrl: './client-parent.component.html',
  styleUrls: ['./client-parent.component.css']
})
export class ClientParentComponent {
  filters = { name: '', gender: '', dob: '' };
  pageNumber = 1;
  pageSize = 10;

  onFilterChange() {
    this.pageNumber = 1;
    this.filters = { ...this.filters }; // important for ngOnChanges in child
  }

  onPageChange(event: PageEvent) {
    this.pageNumber = event.pageIndex + 1;
    this.pageSize = event.pageSize;
  }
}
