import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {
  @Input("previous-page") previousPage: number;
  @Input("next-page") nextPage: number;
  @Output("changed-page") changedPage: EventEmitter<number> = new EventEmitter<number>();

  issueChangedPage(pageNumber: number): void {
    this.changedPage.emit(pageNumber);
  }
}
