import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { isNotBlank } from 'src/app/utils/string.utils';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit, OnDestroy {
  @Input("is-focused") isFocused: boolean = false;
  repositoryName: string;
  queryParamsSubscription: Subscription;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.queryParamsSubscription = this.router.routerState.root.queryParams.subscribe(queryParams => this.repositoryName = queryParams.repositoryName);
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }

  goToSearchComponent(): void {
    if(isNotBlank(this.repositoryName)) {
      const queryParams = {
        repositoryName: this.repositoryName
      };
      
      this.router.navigate(["/search"], { queryParams });
    }
  }
}
