import { Component, OnInit, OnDestroy } from '@angular/core';
import { Repository } from 'src/app/models/repository.model';
import { Page } from 'src/app/models/page.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  repositoriesPage: Page<Repository>;
  repositoriesResolverSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.repositoriesResolverSubscription = this.activatedRoute.data.subscribe((data: { repositoriesPage: Page<Repository> }) => {
      this.repositoriesPage = data.repositoriesPage;
    });
  }

  ngOnDestroy(): void {
    this.repositoriesResolverSubscription.unsubscribe();
  }

  changePage(pageNumber: number): void {
    const repositoryName: string = this.activatedRoute.snapshot.queryParams.repositoryName;

    const queryParams = {
      repositoryName,
      pageNumber
    };

    this.router.navigate(["/search"], { queryParams });
  }
}