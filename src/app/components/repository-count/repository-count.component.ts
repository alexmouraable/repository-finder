import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repository-count',
  templateUrl: './repository-count.component.html',
  styleUrls: ['./repository-count.component.css']
})
export class RepositoryCountComponent {

  @Input("repository-count") repositoryCount: number;

}
