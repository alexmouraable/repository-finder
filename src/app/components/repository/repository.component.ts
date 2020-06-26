import { Component, OnInit, Input } from '@angular/core';
import { Repository } from 'src/app/models/repository.model';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent {
  @Input() repository: Repository;
}
