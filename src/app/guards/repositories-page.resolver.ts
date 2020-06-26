import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Page } from '../models/page.model';
import { Repository } from '../models/repository.model';
import { Observable } from 'rxjs';
import { RepositoryService } from '../services/repository.service';
import { Injectable } from '@angular/core';
import { Pageable } from '../models/pageable.model';
import { RepositoryFilter } from '../models/repository-filter.model';

@Injectable({
    providedIn: "root"
})
export class RepositoriesPageResolver implements Resolve<Page<Repository>> {

    constructor(private repositoryService: RepositoryService) { }

    resolve(ActivatedRouteSnapshot: ActivatedRouteSnapshot): Observable<Page<Repository>> {
        const repositoryName: string = ActivatedRouteSnapshot.queryParams.repositoryName;
        const perPage: string = "10";
        const pageNumber: string = ActivatedRouteSnapshot.queryParams.pageNumber || "1";

        const repositoryFilter: RepositoryFilter = {
            repositoryName
        };

        const pageable: Pageable = {
            perPage,
            pageNumber
        };

        return this.repositoryService.getAll(repositoryFilter, pageable);
    }

}