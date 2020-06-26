import { Component, OnInit, Input } from '@angular/core';
import { Repository } from 'src/app/models/repository.model';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.css']
})
export class RepositoryListComponent {

  @Input() repositories: Repository[];

}
